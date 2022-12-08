
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './component/Home';
// import  {increment}  from './redux_features/actions/actions';
import {Routes, Route} from "react-router-dom";
import Description from './component/Description';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route  path ="/" element={<Home />}></Route>
            <Route  path ='/Description/:id' element={<Description /> } />
        </Routes> 

        <div>
        <footer className="footer">         
         <section className="foot-left">Copyright 2022 &copy; Safa Bouguezzi All Rights Reserved.</section>
        <section className="foot-right">Made with
            <span> ❤ </span>
            by SB
            {/* <a href="https://github.com/safabouguezzi" target="_blank">SB</a> */}
        </section> 
        </footer> 
        </div>
    </div>
  );
}

export default App;
