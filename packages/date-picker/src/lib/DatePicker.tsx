import type { DatePickerProps } from '../index';
import { useDateManagement } from "./hooks/useDateManagment";
import { useDialogManagement } from "./hooks/useDialogManagement";
import { formatDate } from "./utils/dateFormatters";
import { DialogHeader } from "./components/DialogHeader";
import { MonthNavigator } from "./components/MonthNavigator";
import { YearSelector } from "./components/YearSelector";
import { DayGrid } from "./components/DayGrid";

export const DatePicker: React.FC<DatePickerProps> = ({ defaultDate = new Date(), onChange, locale = "en-US", displayButtonClassName, dialogPositionY = "bottom", dialogPositionX = "right", mainColor = "#6366f1", dateStyle = "short" }: DatePickerProps) => {
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
      <button
        className={`inline-flex items-center border border-gray-200 rounded-md px-2 py-1 ${displayButtonClassName || ''}`}
        onClick={toggleDialog}
      >
        {formatDate(date, locale, dateStyle)}
      </button>
      <dialog
        ref={dialogRef}
        className={`m-0 p-4 rounded-lg shadow-lg border border-gray-200 absolute backdrop:hidden w-fit min-w-[310px] max-h-[80vh] overflow-auto ${dialogPositionY === "top"
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
          <DialogHeader
            onClose={() => dialogRef.current?.close()}
            mainColor={mainColor}
          >
            <MonthNavigator
              viewDate={viewDate}
              locale={locale}
              mainColor={mainColor}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onYearSelectToggle={() => setShowYearSelect(!showYearSelect)}
            />
          </DialogHeader>

          {showYearSelect ? (
            <YearSelector
              viewDate={viewDate}
              locale={locale}
              mainColor={mainColor}
              onYearChange={handleYearChange}
            />
          ) : (
            <DayGrid
              viewDate={viewDate}
              selectedDate={date}
              mainColor={mainColor}
              onDateSelect={handleDateSelect}
            />
          )}
        </form>
      </dialog>
    </div>
  );
}

export default DatePicker;

