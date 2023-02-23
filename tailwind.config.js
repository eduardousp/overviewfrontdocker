/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Barlow, sans-serif',
      },

      colors: {
        danger: '#FF442B',
        success: '#49E86C',

        purple: {
          200: '#D8CEEC',
          900: '#61449B',
        },
        orange: {
          600: '#F16024',
        },
        blue: {
          900: '#1F2047',
        },
        gray: {
          50: '#F9F9F9',
          300: '#c6c6c5',
        },
      },

      backgroundImage: {
        'creative-preview': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23F16024FF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='9' stroke-linecap='butt'/%3e%3c/svg%3e")`,
      },

      animation: {
        'fade-in': 'fadeIn 300ms ease-in',
        'fade-out': 'fadeOut 300ms ease-in',

        'scale-in': 'scaleIn 100ms ease-in',
        'scale-out': 'scaleOut 100ms ease-in',

        'slide-left': 'slideLeft 300ms ease-in',
        'slide-left-out': 'slideLeftOut 300ms ease-in',

        'slide-right': 'slideRight 300ms ease-in',
        'slide-right-out': 'slideRightOut 300ms ease-in',
      },

      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },

        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },

        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideLeftOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideRightOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin((helpers) => {
      dataStateVariant('on', helpers);
      dataStateVariant('off', helpers);
      dataStateVariant('open', helpers);
      dataStateVariant('closed', helpers);
      dataStateVariant('active', helpers);
      dataStateVariant('inactive', helpers);
      dataStateVariant('checked', helpers);
      dataStateVariant('unchecked', helpers);
    }),
  ],
};

function dataStateVariant(state, { addVariant, e }) {
  addVariant(`state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`state-${state}${separator}${className}`)}[data-state='${state}']`;
    });
  });

  addVariant(`group-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${e(
        `group-state-${state}${separator}${className}`
      )}`;
    });
  });
}
