

import './App.css';
import Navbar from './Components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart'
import { Provider} from 'react-redux';
import store from './Store/Store';

function App() {
  return (
   <div>
    <Provider store={store}>


    <Navbar/>
    <Routes >
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          
        </Routes>
    </Provider>
   </div>
  );
}

export default App;
