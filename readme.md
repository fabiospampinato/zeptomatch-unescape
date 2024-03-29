# Zeptomatch Unescape

A little utility for removing escape sequences from a glob.

Removing escape sequences is useful in combination with [`zeptomatch-is-static`](https://github.com/fabiospampinato/zeptomatch-is-static) to handle fully-static globs specially.

## Install

```sh
npm install --save zeptomatch-unescape
```

## Usage

```ts
import unescape from 'zeptomatch-unescape';

// Remove escapes from a glob

unescape ( 'foo*bar?' ); //=> 'foo*bar?'
unescape ( 'foo\\*bar\\?' ); //=> 'foo*bar?'
```

## License

MIT © Fabio Spampinato
