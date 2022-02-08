# @profi.co/eslint-config

ESLint configs for use in company's projects

## Current configs

Ready for use:

- base (set of recommended rules, extends typescript-eslint/recommended, airbnb-base and prettier config)
- nest (set of rules for NestJs, extended from base config)
- react (set of rules for React, extended from base config)

To Do:

- angular

## Installation

Install @profi.co/eslint-config:

```
npm install --save-dev @@profi.co/eslint-config
```

or with yarn:

```
yarn add --dev @profi.co/eslint-config
```

## Usage

To use base config, add @profi.co/eslint-config to "extends" array in your .eslintrc file in one of the following ways:

```json
{
  "extends": ["@profi.co"]
}
```

or

```json
{
  "extends": ["@profi.co/eslint-config"]
}
```

---

To use config for specific framework/library, extend it in following way:

```json
{
  "extends": ["@profi.co/eslint-config/react"]
}
```

or

```json
{
  "extends": ["@profi.co/eslint-config/nest"]
}
```
