import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary = {
  args: {},
};

export const WithLocaleIT = {
  args: {
    locale: "it-IT",
  },
};

export const WithMonthExtended = {
  args: {
    monthExtended: true,
  },
};

export const WithLocaleFR = {
  args: {
    locale: "fr-FR",
  },
};

export const WithLocaleES = {
  args: {
    locale: "es-ES",
  },
};

export const WithCustomDisplayButtonClassName = {
  args: {
    displayButtonClassName: "bg-blue-500 text-white rounded-full",
  },
};
