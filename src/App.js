import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import ErrorElement from "./Components/ErrorElement";
import BooksContextProvider from "./BooksContext";


function App() {
  return (
    <BrowserRouter>
    <BooksContextProvider>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="search" element={<SearchPage/>}/>
      <Route path="*" element={<ErrorElement/>}/>
    </Routes>
    </BooksContextProvider>
   
    </BrowserRouter>
    
  );
}

export default App;
