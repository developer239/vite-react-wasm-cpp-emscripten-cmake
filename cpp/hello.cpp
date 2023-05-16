#include <emscripten/bind.h>

std::string hello() {
  return "Hello from C++!";
}

EMSCRIPTEN_BINDINGS(my_module) {
  emscripten::function("hello", &hello);
}
