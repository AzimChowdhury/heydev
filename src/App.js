import { Route, Routes } from 'react-router-dom';
import AllUsers from './Pages/AllUser/Allusers';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Footer';
import UserDetails from './Pages/UserDetails/UserDetails';
import { createContext, useState, useEffect } from 'react';



export const UsersContext = createContext();



function App() {

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setAllUsers)
  }, []);


  return (
    <div>
      <UsersContext.Provider value={allUsers}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allusers' element={<AllUsers />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Routes>

        <Footer />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
