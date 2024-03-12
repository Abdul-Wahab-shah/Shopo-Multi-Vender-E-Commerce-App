import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import {LoginPage,SignupPage} from "./Routes.js";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
