import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import Articles from './components/Articles'
import Topics from './components/Topics'
import Account from './components/Account'
import ArticleById from './components/ArticleById'
import Comments from './components/Comments'
import VoteOnTheArticle from './components/VoteOnTheArticle'


function App() {
  const appTitle = "TITLE"
 

  return (
    <main>
      <Header className="title" title={appTitle} />
      <Routes>
        <Route path='/articles' element={<Articles />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/my-accaunt' element={<Account />} />
        <Route path='/articles/:article_id' element={<ArticleById />} />
      </Routes>
    </main>
  )
}

export default App
