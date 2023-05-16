#include <emscripten/bind.h>

std::string hello() {
  return "Hello from C++!";
}

EMSCRIPTEN_BINDINGS(wasm_module) {
  emscripten::function("hello", &hello);
}
