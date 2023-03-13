import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth.js";
import { CreateRecipe } from "./pages/create-recipe.js";
import { Home } from "./pages/home.js";
import { SavedRecipes } from "./pages/saved-recipes.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
