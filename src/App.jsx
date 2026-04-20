import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;
