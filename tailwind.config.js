module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        secondary: 'Lato, sans-serif'
      },
      colors: {
        brand: 'var(--brand)',
        'brand-strong': 'var(--brand-strong)',
        'brand-soft': 'var(--brand-soft)',
        secondary: 'var(--secondary)',
        clear: 'var(--clear)',
        subtle: 'var(--subtle)',
        'inverse-clear': 'var(--inverse-clear)',
        'inverse-subtle': 'var(--inverse-subtle)',

        surface: {
          bg: 'var(--surface-bg)',
          'elevation-low': 'var(--surface-elevation-low)',
          'elevation-high': 'var(--surface-elevation-high)'
        },

        foreground: {
          disabled: 'var(--forground-disabled)'
        },

        core: {
          win: 'var(--core-win)',
          loss: 'var(--core-loss)',
          draw: 'var(--core-draw)',
          'yellow-card': 'var(--core-yellow)',
          focus: 'var(--focus)'
        }
      }
    }
  }
}
