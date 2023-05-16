'use client'

/* eslint-disable no-console,import/no-unresolved */
import React, { useEffect, useState } from 'react'

export const HelloComponent = () => {
  const [message, setMessage] = useState('none')

  useEffect(() => {
    const loadWasm = async () => {
      // const wasmModule = await fetch('../public/hello.wasm')
      // const buffer = await wasmModule.arrayBuffer()
      // const wasmInstance = await WebAssembly.instantiate(buffer, {})

      // @ts-ignore TODO: fix types
      const wasmModule = await import('../../public/hello.js')
      setMessage(wasmModule.hello())
    }

    loadWasm().catch(console.error)
  }, [])

  return <div>{message}</div>
}
