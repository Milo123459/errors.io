# errors.io

> Errors with superpowers

## Idea

Errors are annoying to manage, which is why I've created errors.io which allows you to manage errors, clal them, edit them remotely and more.

## Usage

Written in TypeScript

```ts
// file1.ts
import { Manager, BaseError } from 'errors.io';

Manager().createError('name-of-error', '{stack-trace} found at {err}');
//                    ^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                    error name        error string
// file2.ts
import { Manager } from 'errors.io';
Manager('name-of-error', { "stack-trace": 'foo/bar', err: __dirname });
// throws error
```

Pointless, fast, efficient, what more could you need?