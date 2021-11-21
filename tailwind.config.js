const plugin = require('tailwindcss/plugin')


module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: { 
        styled: true,
        themes: true,
        base: true,
        logs: true,
        utils: true,
        rtl: false,
        theme: [
            'synthwave',
            'emerald', 
            'forest',
            'bumblebee',
            'cyberpunk',
            'retro',
            'wireframe',
            'corporate',
            'valentine',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'cmyk',
            'garden',
            'cupcake',
            'dracula',
        ]
    }


  }