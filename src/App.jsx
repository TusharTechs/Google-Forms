import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Response from "./Components/Response";
import './Components/Form.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/response" element={<Response/>} />
      </Routes>
    </Router>
  );
};

export default App;