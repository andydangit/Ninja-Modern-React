import Navbar from "./Component/Navbar";
import Home from "./Component/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Component/pages/Create";
import BlogDetails from "./Component/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
         <Switch>
           <Route exact path="/"> 
              <Home />
           </Route>
           <Route path="/create"> 
              <Create />
           </Route>
           {/* the id can be any name  */}
           <Route path="/blogs/:id"> 
              <BlogDetails />
           </Route>
           <Route path = "*">
             <NotFound />
           </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


