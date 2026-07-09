import ZeroMd from 'zero-md'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { baseUrl } from 'marked-base-url'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import markedAlert from 'marked-alert'
// @ts-ignore
import STYLES from './downloaded.css?raw'

customElements.define(
  'zero-md',
  class extends ZeroMd {
    async load() {
      await super.load({
        marked: () => new Marked(),
        markedHighlight: () => markedHighlight,
        markedBaseUrl: () => baseUrl,
        markedGfmHeadingId: () => gfmHeadingId,
        markedAlert: () => markedAlert,
        hljs: () => import('highlight.js').then((m) => m.default),
        mermaid: () => import('mermaid').then((m) => m.default),
        katex: () => import('katex').then((m) => m.default)
      })
      this.template = STYLES
    }
  }
)
