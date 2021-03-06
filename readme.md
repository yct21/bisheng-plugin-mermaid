# bisheng-plugin-mermaid

This is a Bisheng plugin to generate Mermaid diagrams.

## Install

Install with `npm`:

```bash
npm install --save bisheng-plugin-mermaid
```

or with `yarn`:

```bash
yarn add bisheng-plugin-mermaid
```

Plugin should be put in configuraion of theme in use:

```js
// See example/_theme/lib/index.js
module.exports = {
  plugins: [
    'bisheng-plugin-mermaid',
  ],
}
```

## Usage

In markdown:

<pre>
```mermaid
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[Car]
```
</pre>

would be rendered as

![screenshot](./screenshot.jpeg)

## License

MIT
