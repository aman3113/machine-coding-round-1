import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import ErrorElement from "./Components/ErrorElement";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="search" element={<SearchPage/>}/>
      <Route path="*" element={<ErrorElement/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
