import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fetchArticlesWithTopic from './utils/images-api'

function App() {
  const [count, setCount] = useState(0)
  console.log(fetchArticlesWithTopic("cat"))

  return (
    <>
      
       <div></div>
    </>
  )
}

export default App
