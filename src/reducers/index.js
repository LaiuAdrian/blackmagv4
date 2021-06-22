
import {combineReducers} from 'redux'

const ADAUGA_IN_COS = 'ADAUGA_IN_COS';



export  const Adauga_in_cos =(id,pret,titlu,galerie,atribute,buc,PretTotal)=>{

    return{
        type :ADAUGA_IN_COS,
        id,
        pret,
        titlu,
        galerie,
        atribute,
        buc,
        PretTotal
        
    }
}

  const Cos_Initial=[
  
  ]
  
const Cos=(state=Cos_Initial, action)=>{
    switch (action.type) {
      case  ADAUGA_IN_COS:
        return [
          ...state,
          {
           id:action.id,
           pret:action.pret,
           titlu:action.titlu,
           galerie:action.galerie,
           atribute:action.atribute,
           buc:action.buc,
           PretTotal:action.PretTotal
          }
        ];
  
      default:
        return state;
    }
  }


  const Api_Initial=[
 {
   api:  ' https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-blackmag-products'
 }
  ]
  const FILTREAZA_PRODSE = 'FILTREAZA_PRODUSE';

  export  const Filtreaza_produse =(api)=>{

    return{
        type :FILTREAZA_PRODSE,
        api    
    }
}

  const Filtrare=(state= Api_Initial, action)=>{
    switch (action.type) {
      case FILTREAZA_PRODSE:
        return [
          ...state,
          {
           api:action.api
          }
        ];
  
      default:
        return state;
    }
  }



export default combineReducers({
    Cos,
    Filtrare
});