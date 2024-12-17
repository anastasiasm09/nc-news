import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import Topics from './components/Topics'
import Users from './components/Users'



function App() {
  const appTitle = "TITLE"

  return (
    <>
      <div>
          <Header className="title" title={appTitle} />
          <Routes>
            <Route path='/articles' element={<Articles />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/my-accaunt' element={<Users />} />
          </Routes>
      </div>
  </>
  )
}

export default App
