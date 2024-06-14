# `@dryanovski/eslint-config`

Opinionated ESLint config.

## Installation & Usage

```
// NPM
npm install @dryanovski/eslint-config

// JSR
npx jsr add @dryanovski/eslint-config
```

In your `eslint.config.js`

```js
import myConfig from '@dryanovski/eslint-config';

export default [...myConfig];
```

Then run `pnpm eslint .` or `npm eslint .`.

### Release new version of the package

Make sure to set the correct version inside the `package.json` and `jsr.json` - make sure that they are the same.

To release the packages you need to run the following commands

```console
npm publish --access public
```

And for publishing into JSR

```console
npx jsr publish
```
