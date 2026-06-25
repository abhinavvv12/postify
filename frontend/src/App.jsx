import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import FeedPage from './pages/FeedPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path= '/create-post' element = {<CreatePost />}/>
        <Route path= '/feed' element = {<FeedPage />}/>
      </Routes>
    </Router>
  )
}

export default App
