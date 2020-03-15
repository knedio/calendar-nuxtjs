/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    maxHeight: {
     '0': '0',
     '1/4': '25%',
     '1/2': '50%',
     '3/4': '75%',
     'full': '100%',
     '75': '75vh'
    },
    extend: {
      width: {
        'p28': '28%',
        'p72': '72%'
      }
    }
  },
  variants: {},
  plugins: []
}
