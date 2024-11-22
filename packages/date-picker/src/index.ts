import { DatePicker as Component } from './lib/DatePicker';
import type { FC } from 'react';

// Declare the interface directly here
export interface DatePickerProps {
    defaultDate?: Date;
    onChange: (date: Date) => void;
    locale?: string;
    displayButtonClassName?: string;
    dialogPositionY?: "top" | "bottom" | "center";
    dialogPositionX?: "left" | "right" | "center";
    mainColor?: string;
    monthExtended?: boolean;
    dateStyle?: "full" | "long" | "short";
}

// Export the component with the interface
export const DatePicker: FC<DatePickerProps> = Component;

export default DatePicker;