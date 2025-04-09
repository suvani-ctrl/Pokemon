// App.jsx (or App.js)

import Navigation from "./Navigation/Nav"
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Category from "./SideBar/Category/Category";
import Colors from "./SideBar/Colors/Colors";
import Price from "./SideBar/Price/Price";
function App() {
  return (
    <div>
      <Navigation />
      <Products />
      <Recommended />
      <Category />
      <Colors />
      <Price />
    </div>
  )
}

export default App; // Make sure to export the component properly
