import logo from './logo.svg';
import Home from './pages/home'
import About from './pages/about'
import TourDistances from './pages/averageDistance'
import Profile from './pages/profile'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
import Navbar from './components/navbar.js'
import './App.css';
// import "swiper/css/bundle";

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TourDistances' element={<TourDistances />} />
          <Route path='/About' element={<About />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
