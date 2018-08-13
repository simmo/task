# Task

[![Travis][img-travis]][url-travis] [![npm][img-npm]][url-npm] [![downloads][img-downloads]][url-npm] [![License][img-license]][url-license]

[img-travis]: https://img.shields.io/travis/simmo/task.svg?style=flat-square
[url-travis]: https://travis-ci.org/simmo/task
[img-npm]: https://img.shields.io/npm/v/@simmo/task.svg?style=flat-square
[url-npm]: https://npmjs.org/package/@simmo/task
[img-license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[url-license]: https://github.com/simmo/task/blob/master/LICENSE
[img-downloads]: https://img.shields.io/npm/dm/@simmo/task.svg?style=flat-square

JavaScript utility that provides a consistent, clean return from promises. Particularly helpful when using await/async.

## Install

### NPM

`npm install @simmo/task`

### Yarn

`yarn add @simmo/task`

## Usage

### `task(<Promise>) => { error: <Any>, data: <Any> }`

`task` always returns an object. The object will contain two properties; `error` and `data`.

If the promise is resolved, `error` will be `null` and `data` will contain anything the promise has returned. If the promise is rejected, `error` will return the error provided by the promise and `data` will be `null`.

```javascript
import task from '@simmo/task'

const { error, data } = await task(fetch('/some-api'))

if (error) {
  // Failure
  console.error(error)
} else {
  // Success
  console.log(data)
}
```

## License

MIT © [Mike Simmonds](https://simmo.me)
