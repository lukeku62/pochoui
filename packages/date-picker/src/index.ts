import type { DatePickerProps } from './lib/DatePicker';
import { DatePicker } from './lib/DatePicker';

export type { DatePickerProps };
export { DatePicker };

// Also explicitly type the default export
const DefaultExport: React.FC<DatePickerProps> = DatePicker;
export default DefaultExport;