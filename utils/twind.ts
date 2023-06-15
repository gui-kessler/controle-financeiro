import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      }
    },
    fontFamily: {
      'body': [
        'ui-sans-serif', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial',
      ],
      'sans': [
        'Arial', 
        'Noto Sans', 
        'sans-serif'
      ]
    }
  }
};
if (IS_BROWSER) setup(config);
