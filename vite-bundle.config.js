import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      formats: ['es'],
      fileName: 'bundled'
    },
    emptyOutDir: false,
    rolldownOptions: {
      external: [],
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
