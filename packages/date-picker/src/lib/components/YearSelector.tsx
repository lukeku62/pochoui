interface YearSelectorProps {
  viewDate: Date;
  locale: string;
  mainColor: string;
  onYearChange: (year: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({ viewDate, mainColor, onYearChange }) => (
  <div className="grid grid-cols-4 gap-2 max-h-[40vh] overflow-y-auto">
    {Array.from({ length: 100 }, (_, i) => viewDate.getFullYear() - 50 + i).map((year) => (
      <button
        key={year}
        type="button"
        onClick={() => onYearChange(year)}
        className={`p-2 text-sm rounded hover:bg-gray-100`}
        style={year === viewDate.getFullYear() ? { backgroundColor: mainColor, color: 'white' } : undefined}
      >
        {year}
      </button>
    ))}
  </div>
);