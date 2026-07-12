# zero-md-bundled

> `zero-md` bundled for local use

Pre-built distribution of the [`zero-md`](https://github.com/zerodevx/zero-md) web component. This
embeds all required CSS and JS libraries (such as Markdown parsing, syntax highlighting, math
formatting and diagramming) into a local bundle, enabling you to render beautiful Markdown documents
without external CDN dependencies.

## Usage

### Step 1: Download the distribution

Download `dist.zip` from the [releases](https://github.com/zerodevx/zero-md-bundled/releases) page
and extract it into your project folder.

### Step 2: Load the module entry-point

`zero-md-bundled` comes in two flavours:

- Standard (`dist/index.js`) - RECOMMENDED
- Fully Bundled (`dist/bundled.js`)

Always use **Standard**, where code is split into chunks and lazy-loaded. **Fully Bundled** combines
everything into a single standalone file. Loading a ≈6MB JS file on the browser is generally not a
good idea unless you know what you're doing.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>zero-md-bundled</title>
    <!-- Load the local bundle (no need for `?register`) -->
    <script type="module" src="/path/to/dist/index.js"></script>
  </head>
  <body>
    <zero-md src="example.md"></zero-md>
  </body>
</html>
```

> [!NOTE]
>
> The `zero-md` web component is auto-registered so you may omit the `?register` query param
> directive.

## Development

### Install

Clone the repository and install dependencies.

```bash
git clone https://github.com/zerodevx/zero-md-bundled.git
cd zero-md-bundled
npm i
```

### Build locally

Download latest CSS assets, then build project.

```bash
npm run download-css    # Download styles into `downloaded.css`
npm run build           # Build project into `dist/`
```

## Contributing

### Bugs and feature requests

Open a new issue or discussion - I'd be stoked to hear from you!

### Raise a PR

Standard Github
[contribution workflow](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
applies.

## License

ISC
