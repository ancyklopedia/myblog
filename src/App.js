import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage.js"
import AboutPage from "./components/AboutPage/AboutPage.js"
import HeadingPage from './components/HeadingPage/HeadingPage';
import Newsletter from './components/Newsletter/Newsletter';
import AuthorsPage from './components/AuthorsPage/AuthorsPage.js'; 
import CommentsPage from './components/Comments/CommentsPage';

function App() {


  return (
    <div className="App" >
    <BrowserRouter>

      <HeadingPage />

    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/authors" element={<AuthorsPage />} />
      <Route path={"/comments"} element={<CommentsPage />}/>

    </Routes>

    <Newsletter />

    </BrowserRouter>
      
    </div>
  );
}

export default App;
