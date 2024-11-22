import { formatDate } from './dateFormatters';

describe('formatDate', () => {
  // Use a fixed date for consistent testing
  const testDate = new Date('2024-03-14');

  it('formats date with "short" style in en-US locale', () => {
    const result = formatDate(testDate, 'en-US', 'short');
    expect(result).toBe('3/14/24');
  });

  it('formats date with "long" style in en-US locale', () => {
    const result = formatDate(testDate, 'en-US', 'long');
    expect(result).toBe('March 14, 2024');
  });

  it('formats date with "full" style in en-US locale', () => {
    const result = formatDate(testDate, 'en-US', 'full');
    expect(result).toBe('Thursday, March 14, 2024');
  });

  it('formats date correctly in different locale (fr-FR)', () => {
    const result = formatDate(testDate, 'fr-FR', 'long');
    expect(result).toBe('14 mars 2024');
  });

  it('handles invalid dates', () => {
    const invalidDate = new Date('invalid');
    expect(() => formatDate(invalidDate, 'en-US', 'short')).toThrow();
  });
});