import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLODTCIV5KM_H42KauLcpEOF2oE3Ji84",
  authDomain: "fir-test-d51aa.firebaseapp.com",
  projectId: "fir-test-d51aa",
  storageBucket: "fir-test-d51aa.appspot.com",
  messagingSenderId: "49299788842",
  appId: "1:49299788842:web:aa90807d4a060ad449df53",
  measurementId: "G-HH457EYFW5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
