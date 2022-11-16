import * as esbuild from 'esbuild-wasm'
import { useState, useEffect, useRef } from 'react'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'

const App = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')
  const serviceRef = useRef<any>()

  const startService = async () => {
    serviceRef.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    })
  }

  const onClick = async () => {
    if (!serviceRef.current) return
    const result = await serviceRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
    })
    // console.log(result)
    setCode(result.outputFiles[0].text)  
  }

  useEffect(() => {
    startService()
  }, [])

  return (
    <div>
      <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>
        {code}
      </pre>
    </div>
  )
}

export default App
