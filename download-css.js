const HOST = `<style>:host{display:block;position:relative;contain:content;}:host([hidden]){display:none;}</style>`

const MARKDOWN = await fetch(
  'https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown.min.css'
).then((r) => r.text())

const HIGHLIGHT_LIGHT = await fetch(
  'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11/styles/github.min.css'
).then((r) => r.text())

const HIGHLIGHT_PREFERS_DARK = await fetch(
  'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11/styles/github-dark.min.css'
).then((r) => r.text())

const KATEX = await fetch('https://cdn.jsdelivr.net/npm/katex@0/dist/katex.min.css').then((r) =>
  r.text()
)

console.log(
  `${HOST}<style>${MARKDOWN}</style><style>${HIGHLIGHT_LIGHT}</style><style media="(prefers-color-scheme:dark)">${HIGHLIGHT_PREFERS_DARK}</style><style>${KATEX}</style>`
)

export {}
