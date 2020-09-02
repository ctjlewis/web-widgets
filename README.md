# web-widgets

### Welcome to my [gnv project](https://github.com/TeleworkInc/gnv)!

I'm one big ES6 module, and I compile to multiple targets. 

## Installing
Clone this repository, and then enter the directory and install globally:
```bash
cd web-widgets
yarn link
```

## Development

### Install `gnv`
Make sure to install `gnv` globally with:
```bash
yarn global add gnv
# or
npm i -g gnv
```

And download any peer deps needed by `gnv` with:
```bash
gnv get-peer-deps
```

### Test out the CLI
Install the development dependencies for this package:
```bash
gnv install -d # installs this project's dev and release deps
```

and then run the dev CLI (executes source at `exports/cli.js`):
```bash
web-widgets-dev --help
```
```none
Usage: web-widgets-dev [options] [command]

Options:
  -h, --help       display help for command

Commands:
  say-hello [msg]  Say hello, or provide a special message instead.
  help [command]   display help for command
```

Build the project with:
```bash
gnv build
```

And run the production CLI (executes release build at `dist/cli.cjs`):
```bash
web-widgets --help
```

## License
I'm open source by default!

```none
Released under the MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```