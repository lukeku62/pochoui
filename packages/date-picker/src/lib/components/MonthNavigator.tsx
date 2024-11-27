
interface MonthNavigatorProps {
  viewDate: Date;
  locale: string;
  mainColor: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onYearSelectToggle: () => void;
}

export const MonthNavigator: React.FC<MonthNavigatorProps> = ({
  viewDate,
  locale,
  mainColor,
  onPrevMonth,
  onNextMonth,
  onYearSelectToggle,
}) => (
  <div className="flex items-center gap-2 w-full justify-between">
    <button
      type="button"
      onClick={onPrevMonth}
      className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mainColor}>
        <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
      </svg>
    </button>
    <button
      type="button"
      onClick={onYearSelectToggle}
      className="px-2 py-1 hover:bg-gray-100 rounded text-gray-600"
    >
      {viewDate.toLocaleString(locale, { month: 'long', year: 'numeric' })}
    </button>
    <button
      type="button"
      onClick={onNextMonth}
      className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mainColor}>
        <path d="M400-240 357-283l198-198-198-198 43-43 241 241-241 241Z" />
      </svg>
    </button>
  </div>
);