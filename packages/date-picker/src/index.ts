import { DatePicker as DatePickerComponent, DatePickerProps as Props } from './lib/DatePicker';

// Re-export with all types inline
export type DatePickerProps = Props;
export const DatePicker: React.FC<DatePickerProps> = DatePickerComponent;

export default DatePicker;