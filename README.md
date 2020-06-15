# eslint-config-profico

ESLint configs for use in company's projects

## Current configs

Ready for use:

- base (set of recommended rules, extends typescript-eslint/recommended, airbnb-base and prettier config)
- nest (set of rules for NestJs, extended from base config)
- react (set of rules for React, extended from base config)

To Do:

- angular

## Installation

Install eslint-config-profico:

```
npm install --save-dev @profico/eslint-config-profico
```

or with yarn:

```
yarn add --dev @profico/eslint-config-profico
```

## Usage

To use base config, add eslint-config-profico to "extends" array in your .eslintrc file in one of the following ways:

```json
{
  "extends": ["@profico"]
}
```

or

```json
{
  "extends": ["@profico/eslint-config"]
}
```

---

To use config for specific framework/library, extend it in following way:

```json
{
  "extends": ["@profico/eslint-config/react"]
}
```

or

```json
{
  "extends": ["@profico/eslint-config/nest"]
}
```
