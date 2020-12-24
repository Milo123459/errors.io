# errors.io

> Errors with superpowers

## Idea

Errors are annoying to manage, which is why I've created errors.io which allows you to manage errors, call them, edit them remotely and more.

## Usage

Written in TypeScript

```ts
// file1.ts
import { Manager, createError } from 'errors.io';

createError('name-of-error', '{foo} was found at {bar}');
//                    ^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                    error name        error string
// file2.ts
import { Manager } from 'errors.io';
Manager('name-of-error', { foo: process.cwd(), bar: __dirname });
// throws error
```

Pointless, fast, efficient, what more could you need?