import { useState } from 'react';

export const useDateManagement = (defaultDate: Date) => {
  const [date, setDate] = useState(defaultDate);
  const [viewDate, setViewDate] = useState(defaultDate);
  const [showYearSelect, setShowYearSelect] = useState(false);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
  };

  const handleYearChange = (year: number) => {
    setViewDate(new Date(year, viewDate.getMonth()));
    setShowYearSelect(false);
  };

  return {
    date,
    setDate,
    viewDate,
    showYearSelect,
    setShowYearSelect,
    handlePrevMonth,
    handleNextMonth,
    handleYearChange,
  };
};