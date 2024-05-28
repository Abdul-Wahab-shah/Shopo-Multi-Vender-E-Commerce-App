import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage, SignupPage,FAQPage, ActivationPage,HomePage,ProductPage,BestSellingPage,
  PopularEventsPage,ProfilePage,ProductDetailsPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store.js";
import {loadUser} from "./redux/actions/user.js"
import { useSelector } from "react-redux";


function App() {
  useEffect(() => {
   Store.dispatch(loadUser())
  }, []);

  const {loading}=useSelector((state)=>state.user)

  return (
    <div>
     {
      loading ?(
        null
      ):(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/activation/:activation_token"element={<ActivationPage />}/>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<PopularEventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
      )
     }
    </div>
  );
}

export default App;
