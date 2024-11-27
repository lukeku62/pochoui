import type { Meta } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};
export default meta;

export const Primary = {
  args: {},
};

export const WithLocaleIT = {
  args: {
    locale: "it-IT",
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

export const WithLocaleJP = {
  args: {
    locale: "ja-JP",
  },
};

export const DateStyleShort = {
  args: {
    dateStyle: "short",
  },
};

export const DateStyleLong = {
  args: {
    dateStyle: "long",
  },
};

export const DateStyleFull = {
  args: {
    dateStyle: "full",
  },
};

export const WithCustomDisplayButtonClassName = {
  args: {
    displayButtonClassName: "bg-blue-500 text-white rounded-full",
  },
};

