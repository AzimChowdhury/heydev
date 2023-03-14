import { Route, Routes } from 'react-router-dom';
import AllUsers from './Pages/AllUser/Allusers';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Footer';
import UserDetails from './Pages/UserDetails/UserDetails';
import { createContext, useState, useEffect } from 'react';



export const UsersContext = createContext();
export const UserContext = createContext();



function App() {

  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);
  const userInfo = {user,setUser}
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setAllUsers)
  }, []);


console.log(user)
  return (
    <div>
      <UsersContext.Provider value={allUsers}>
        <UserContext.Provider value={userInfo}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allusers' element={<AllUsers />} />
            <Route path='/user/:id' element={<UserDetails />} />
          </Routes>

          <Footer />
        </UserContext.Provider>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
