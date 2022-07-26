import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Table from "./Table";
import FetchNews from "./FetchNews";
import SMS from "./SMS";
import Email from "./Email";
import "./App.css";

function App() {
  return (
    <>
      <Router basename="mongo">
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/mongo" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/index.html" element={<Signup />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/FetchNews" element={<FetchNews />} />
          <Route path="/SMS" element={<SMS />} />
          <Route path="/Email" element={<Email />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
