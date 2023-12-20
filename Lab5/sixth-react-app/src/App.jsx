import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatList from './components/BigCats'
import './styles/cat.css'

function App() {

  return (
    <div>
      <CatList/>        
    </div>
  )
}

export default App