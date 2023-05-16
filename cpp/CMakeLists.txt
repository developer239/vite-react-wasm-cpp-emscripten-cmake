cmake_minimum_required(VERSION 3.12)
project(hello)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_EXECUTABLE_SUFFIX ".js") # Change the output file extension to .js

add_executable(hello hello.cpp)

# Add the WASM=1 and NO_EXIT_RUNTIME=1 flags
set_target_properties(hello PROPERTIES LINK_FLAGS  "--bind -s WASM=1 -s NO_EXIT_RUNTIME=1")
