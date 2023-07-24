
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import HomePages from './component/pages/HomePages ';
import ShopPages from './component/pages/ShopPages';
import Login from './component/LoginPages/Login';
import Register from './component/registerPages/Register';
import Detail from './component/DeltaiPage/Detail';



function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={HomePages} />
            <Route path='/Shop' Component={ShopPages} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/detail/:id' Component={Detail} />
        </Routes>
    </BrowserRouter>
  )

 
}

export default App;
