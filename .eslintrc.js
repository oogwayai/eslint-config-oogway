module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'global-require': 0, // Used by React Native.
    'new-cap': [2, { capIsNew: false, newIsCap: true }], // For immutable Record() etc.
    'no-class-assign': 0, // Class assign is used for higher order components.
    'no-nested-ternary': 0, // It's nice for JSX.
    'no-param-reassign': 0, // We love param reassignment. Naming is hard.
    'no-shadow': 0, // Shadowing is a nice language feature. Naming is hard.
    'import/imports-first': 0, // Este sorts by atom/sort-lines natural order.
    'react/jsx-filename-extension': 0, // No, JSX belongs to .js files
    'jsx-a11y/html-has-lang': 0, // Can't recognize the Helmet.
    'no-confusing-arrow': 0, // This rule is super confusing.
    'react/forbid-prop-types': 0, // Este is going to use Flow types.
    'react/no-unused-prop-types': 0, // Este is going to use Flow types.
    'class-methods-use-this': 0, // Good idea, but ignores React render.
    'arrow-parens': 0, // Not really.
  },
};
