
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pagini/Home';
import Magazin from './pagini/Magazin';
import './styles.css';
import Contact from './pagini/Contact';
import CosulMeu from './pagini/CosulMeu';
import ContulMeu from './pagini/ContulMeu';
import DespreNoi from './pagini/DespreNoi';
import CreazaProduse from './pagini/CreazaProduse';
import CreazaCategorii from './pagini/CreazaCategorii';
import AdminPage from './pagini/AdminPage';


const  App=()=>{
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Magazin" component={Magazin}/>
        <Route path="/DespreNoi" component={DespreNoi}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/ContulMeu" component={ContulMeu}/> 
        <Route path="/CosulMeu" component={CosulMeu}/>   
        <Route path="/CreazaProduse" component={CreazaProduse}/>    
        <Route path="/CreazaCategorii" component={CreazaCategorii}/>    
        <Route path="/AdminPage" component={AdminPage}/> 
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;
