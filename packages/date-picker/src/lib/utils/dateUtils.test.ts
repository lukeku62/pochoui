import { getDaysInMonth, isSameDay } from './dateUtils';

describe('getDaysInMonth', () => {
  it('should return 42 days total', () => {
    const date = new Date(2024, 2, 1); // March 2024
    const days = getDaysInMonth(date);
    expect(days.length).toBe(42);
  });

  it('should start with correct previous month days', () => {
    const date = new Date(2024, 2, 1); // March 2024
    const days = getDaysInMonth(date);

    // March 2024 starts on Friday, so we expect 5 days from February
    expect(days[0]).toEqual(new Date(2024, 1, 25));
    expect(days[4]).toEqual(new Date(2024, 1, 29));
  });

  it('should contain correct current month days', () => {
    const date = new Date(2024, 2, 1); // March 2024
    const days = getDaysInMonth(date);

    // First day of March should be at index 5
    expect(days[5]).toEqual(new Date(2024, 2, 1));
    // Last day of March should be at index 35
    expect(days[35]).toEqual(new Date(2024, 2, 31));
  });

  it('should end with correct next month days', () => {
    const date = new Date(2024, 2, 1); // March 2024
    const days = getDaysInMonth(date);

    // April days should start at index 36
    expect(days[36]).toEqual(new Date(2024, 3, 1));
    expect(days[41]).toEqual(new Date(2024, 3, 6));
  });

  it('should handle months that start on Sunday', () => {
    const date = new Date(2024, 8, 1); // September 2024
    const days = getDaysInMonth(date);

    // Should start directly with September 1st (no previous month days)
    expect(days[0]).toEqual(new Date(2024, 8, 1));
  });

  it('should handle February in a leap year', () => {
    const date = new Date(2024, 1, 1); // February 2024
    const days = getDaysInMonth(date);

    // Should include February 29
    const feb29Index = days.findIndex(d =>
      d.getMonth() === 1 && d.getDate() === 29);
    expect(feb29Index).not.toBe(-1);
  });
});

describe('dateUtils', () => {
  describe('isSameDay', () => {
    it('should return true for same dates', () => {
      const date1 = new Date(2024, 2, 15); // March 15, 2024
      const date2 = new Date(2024, 2, 15); // March 15, 2024
      expect(isSameDay(date1, date2)).toBe(true);
    });

    it('should return false for different days', () => {
      const date1 = new Date(2024, 2, 15); // March 15, 2024
      const date2 = new Date(2024, 2, 16); // March 16, 2024
      expect(isSameDay(date1, date2)).toBe(false);
    });

    it('should return false for same day in different months', () => {
      const date1 = new Date(2024, 2, 15); // March 15, 2024
      const date2 = new Date(2024, 3, 15); // April 15, 2024
      expect(isSameDay(date1, date2)).toBe(false);
    });

    it('should return false for same day in different years', () => {
      const date1 = new Date(2024, 2, 15); // March 15, 2024
      const date2 = new Date(2023, 2, 15); // March 15, 2023
      expect(isSameDay(date1, date2)).toBe(false);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return 42 days for any given month', () => {
      const date = new Date(2024, 2, 1); // March 1, 2024
      const days = getDaysInMonth(date);
      expect(days.length).toBe(42);
    });

    it('should start with correct previous month days', () => {
      const date = new Date(2024, 2, 1); // March 2024 starts on a Friday
      const days = getDaysInMonth(date);
      expect(days[0].getDate()).toBe(25); // Should start with February 25
      expect(days[0].getMonth()).toBe(1); // February (0-based)
    });

    it('should include all days of the current month', () => {
      const date = new Date(2024, 2, 1); // March 2024
      const days = getDaysInMonth(date);
      const marchDays = days.filter(d => d.getMonth() === 2);
      expect(marchDays.length).toBe(31); // March has 31 days
    });

    it('should handle February in a leap year', () => {
      const date = new Date(2024, 1, 1); // February 2024 (leap year)
      const days = getDaysInMonth(date);
      const febDays = days.filter(d => d.getMonth() === 1);
      expect(febDays.length).toBe(29);
    });

    it('should handle February in a non-leap year', () => {
      const date = new Date(2023, 1, 1); // February 2023 (non-leap year)
      const days = getDaysInMonth(date);
      const febDays = days.filter(d => d.getMonth() === 1);
      expect(febDays.length).toBe(28);
    });
  });
});