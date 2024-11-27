import { getDaysInMonth, isSameDay } from "../utils/dateUtils";

interface DayGridProps {
  viewDate: Date;
  selectedDate: Date;
  mainColor: string;
  onDateSelect: (date: Date) => void;
}

export const DayGrid: React.FC<DayGridProps> = ({
  viewDate,
  selectedDate,
  mainColor,
  onDateSelect,
}) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Weekday headers */}
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="text-center text-sm font-medium text-gray-600 w-8">
          {day}
        </div>
      ))}

      {/* Calendar days */}
      {getDaysInMonth(viewDate).map((day, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDateSelect(day)}
          className={`p-2 text-sm rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center ${
            day.getMonth() !== viewDate.getMonth() ? 'text-gray-400' : ''
          }`}
          style={isSameDay(day, selectedDate) ? { backgroundColor: mainColor, color: 'white' } : undefined}
        >
          {day.getDate()}
        </button>
      ))}
    </div>
  );
};