import { useDateManagement } from "./hooks/useDateManagment";
import { useDialogManagement } from "./hooks/useDialogManagement";
import { formatDate } from "./utils/dateFormatters";
import { getDaysInMonth, isSameDay } from "./utils/dateUtils";

type DatePickerProps = {
  defaultDate?: Date;
  onChange: (date: Date) => void;
  locale?: string;
  displayButtonClassName?: string;
  dialogPositionY?: "top" | "bottom" | "center";
  dialogPositionX?: "left" | "right" | "center";
  mainColor?: string; // hex color code
  monthExtended?: boolean;
  dateStyle?: "full" | "long" | "short";
};

export const DatePicker = ({ defaultDate = new Date(), onChange, locale = "en-US", displayButtonClassName, dialogPositionY = "bottom", dialogPositionX = "right", mainColor = "#6366f1", dateStyle = "short" }: DatePickerProps) => {
  const {
    date,
    setDate,
    viewDate,
    showYearSelect,
    setShowYearSelect,
    handlePrevMonth,
    handleNextMonth,
    handleYearChange,
  } = useDateManagement(defaultDate);

  const { dialogRef, toggleDialog, closeDialog } = useDialogManagement();

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate);
    closeDialog();
  };

  return (
    <div className="relative inline-block">
      <button className={`border border-gray-200 rounded-md px-2 py-1 ${displayButtonClassName}`} onClick={toggleDialog}>
        {formatDate(date, locale, dateStyle)}
      </button>
      <dialog
        ref={dialogRef}
        className={`m-0 p-4 rounded-lg shadow-lg border border-gray-200 absolute backdrop:hidden min-w-[280px] ${dialogPositionY === "top"
          ? "bottom-full mb-1"
          : dialogPositionY === "bottom"
            ? "top-full mt-1"
            : dialogPositionY === "center"
              ? "top-1/2 -translate-y-1/2"
              : dialogPositionX === "left"
                ? "right-full mr-1"
                : dialogPositionX === "right"
                  ? "left-full ml-1"
                  : "left-1/2 -translate-x-1/2"
          }`}
      >
        <form method="dialog" className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            {/* Month/Year Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mainColor}>
                  <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setShowYearSelect(!showYearSelect)}
                className="px-2 py-1 hover:bg-gray-100 rounded text-gray-600"
              >
                {viewDate.toLocaleString(locale, { month: 'long', year: 'numeric' })}
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mainColor}>
                  <path d="M400-240 357-283l198-198-198-198 43-43 241 241-241 241Z" />
                </svg>
              </button>
            </div>
            {/* Close button */}
            <button type="button" className="p-1 hover:bg-gray-100 rounded-full" onClick={() => dialogRef.current?.close()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mainColor}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>

          {showYearSelect ? (
            <div className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto">
              {Array.from({ length: 100 }, (_, i) => viewDate.getFullYear() - 50 + i).map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleYearChange(year)}
                  className={`p-2 text-sm rounded hover:bg-gray-100`}
                  style={year === viewDate.getFullYear() ? { backgroundColor: mainColor, color: 'white' } : undefined}
                >
                  {year}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 w-8">
                  {day}
                </div>
              ))}

              {getDaysInMonth(viewDate).map((day, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateSelect(day)}
                  className={`p-2 text-sm rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center ${day.getMonth() !== viewDate.getMonth() ? 'text-gray-400' : ''
                    }`}
                  style={isSameDay(day, date) ? { backgroundColor: mainColor, color: 'white' } : undefined}
                >
                  {day.getDate()}
                </button>
              ))}
            </div>
          )}
        </form>
      </dialog>
    </div>
  );
}

export default DatePicker;

