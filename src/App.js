import { BrowserRouter, Switch, Route } from "react-router-dom"
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    //creation d'une navigation
      //BrowserRouter doit englober toute l'appli
        //Switch teste les erreurs et envoie vers 404 si besoin
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" exact component={Blog}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
