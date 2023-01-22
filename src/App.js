import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <>
      {/* header start  */}
      <Header></Header>
      {/* header end */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* footer start */}
      <Footer></Footer>
      {/* footer end */}
    </>
  );
}

export default App;
