import { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    console.log(Module.hello())
  }, [])

  return <div>App</div>
}
