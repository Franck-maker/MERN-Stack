import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Pages
import Home from './Pages/Home'
import About from './Pages/About'
import ArticlesList from './Pages/ArticlesList'
import Article from './Pages/Article'

//Components
import Navbar from './Components/Navbar'



function App() {
  return (
    <Router>
      <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/articles-list' element={<ArticlesList />} />
        <Route path='/article/:name' element={<Article />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;

