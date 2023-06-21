import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import ErrorElement from "./Components/ErrorElement";
import BooksContextProvider from "./BooksContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
    <BooksContextProvider>
      <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="search" element={<SearchPage/>}/>
      <Route path="*" element={<ErrorElement/>}/>
    </Routes>
    <Footer/>
    </BooksContextProvider>
   
    </BrowserRouter>
    
  );
}

export default App;
