# Vite React WASM CPP Emscripten

TypeScript & React boilerplate with C++ WASM module for native features or performance boost.

## Installation

- `yarn install` (install Node dependencies)
- `npm run install:emsdk` (initialize [emsdk](https://github.com/emscripten-core/emsdk))
- `npm run build:wasm` (build WASM module and JavaScript glue file)

## Development

- `npm run dev` (start development server)
- `npm run build:wasm` (rebuild WASM if C++ changes)

## Project Structure

- `src` - TypeScript & React source code
- `cpp/src` - C++ source code

```text
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── wasm.d.ts
└── cpp
    └── main.cpp
```

## Useful Commands

- `npm run lint:ts` lint TS files
- `npm run format` format files
- `npm run prepare:husky` install git hooks

## Example

```cpp
// cpp/src/main.cpp

#include <emscripten/bind.h>

std::string hello() {
  return "Hello from C++!";
}

EMSCRIPTEN_BINDINGS(wasm_module) {
  emscripten::function("hello", &hello);
}
```

Define types for the glue code:

```ts
// src/wasm.d.ts

declare let Module: {
  hello: () => string
}
```

Use global module in your app:

```ts
export const App = () => <div>{Module.hello()}</div>
```

The wasm module is loaded in `indx.html`.
