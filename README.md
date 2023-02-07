> :warning: **ARCHIVED**: This repository has been archived in favour of [ESLint Profico Plugin](https://github.com/profico/eslint-plugin-profico).

# ESLint config by Profico

This config is used to enforce some ESLint rules Profico developers use on a day-to-day basis.

## Current configurations

- `recommended` (set of recommended rules, extends `@typescript-eslint/recommended`, `airbnb-base` and `prettier` config)
- `nest` (set of rules for NestJS, extended from `base` config)
- `react` (set of rules for React, extended from `base` config)
- `next` (set of rules for Next.js, extended from `react` config)

## Installation

Install with npm:

```
npm install --save-dev @profi.co/eslint-config
```

or with yarn:

```
yarn add --dev @profi.co/eslint-config
```

## Usage

To use the `recommended` config, add `@profi.co` to the `"extends"` array in your `.eslintrc` file in one of the following ways:

```json
{
  "extends": ["@profi.co"]
}
```

or

```json
{
  "extends": ["@profi.co/recommended"]
}
```

To use any of the other provided configurations, just replace `recommended` with the name of the configuration. For example:

```json
{
  "extends": ["@profi.co/react"]
}
```
