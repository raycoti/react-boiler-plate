import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-500">
        Tailwind Installed!
      </h1>
      <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
    </div>
  )
}

export default App
