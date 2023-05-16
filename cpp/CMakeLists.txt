cmake_minimum_required(VERSION 3.12)
project(wasm_ar)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_EXECUTABLE_SUFFIX ".js")

add_executable(wasm_ar src/main.cpp)

set_target_properties(wasm_ar PROPERTIES LINK_FLAGS  "--bind -s WASM=1 -s NO_EXIT_RUNTIME=1")
