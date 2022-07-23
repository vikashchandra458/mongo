import Signup from "./Signup";
import Login from "./Login";
import Table from "./Table";
import FetchNews from "./FetchNews";
import SMS from "./SMS";
import Email from "./Email";
import './App.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom';

function App() 
{
    return <>

    <BrowserRouter basename="/reactMongo">
        <Routes>
            <Route exact path="/reactMongo" element={<Signup/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/Table" element={<Table/>}/>
            <Route  path="/FetchNews" element={<FetchNews/>}/>
            <Route  path="/SMS" element={<SMS/>}/>
            <Route  path="/Email" element={<Email/>}/>
        </Routes>
    </BrowserRouter>
    </>     
}export default App;


