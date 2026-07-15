Promise.all(
  [
    'https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown.min.css',
    'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11/styles/github.min.css',
    'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11/styles/github-dark.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0/dist/katex.min.css'
  ].map((url) => fetch(url).then((r) => r.text()))
).then(([MARKDOWN, HIGHLIGHT_LIGHT, HIGHLIGHT_PREFERS_DARK, KATEX]) => {
  const HOST = `<style>:host{display:block;position:relative;contain:content;}:host([hidden]){display:none;}</style>`
  console.log(
    `${HOST}<style>${MARKDOWN}</style><style>${HIGHLIGHT_LIGHT}</style><style media="(prefers-color-scheme:dark)">${HIGHLIGHT_PREFERS_DARK}</style><style>${KATEX}</style>`
  )
})
