import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { NotFound } from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";
import { Layout } from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter basename="/react-pet-project-3">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />{" "}
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
