# zero-md-bundled

> `zero-md` bundled for local use

Pre-packaged distribution of the [`zero-md`](https://github.com/zerodevx/zero-md) web component. It
embeds all required CSS and libraries (such as Markdown parsing, syntax highlighting, math
formatting and diagramming) so you can render beautiful Markdown documents locally without any
external CDN dependencies.

## Usage

### 1. Download distribution

Download `dist.zip` from the [releases](https://github.com/zerodevx/zero-md-bundled/releases) page
and extract it into your project folder.

### 2. Load module entry-point

`zero-md-bundled` comes in two flavours:

- Standard (`dist/index.js`) - RECOMMENDED
- Fully Bundled (`dist/bundled.js`)

Always use **Standard**, where the code is chunked and lazy-loaded. **Fully Bundled** combines
everything into a single portable file - it's generally a very bad idea to load a single ≈6MB js
file on the browser unless you know what you're doing.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>zero-md-bundled</title>
    <!-- Load the local bundle (no need for `?register`) -->
    <script type="module" src="dist/index.js"></script>
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

#### Download CSS assets

First, download and embed the default stylesheets into `downloaded.css`.

```bash
npm run download-css
```

#### Build the distribution

Then build the project. This generates the build files into `/dist` directory.

```bash
npm run build
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
