
import {combineReducers} from 'redux'

const ADAUGA_IN_COS = 'ADAUGA_IN_COS';



export  const Adauga_in_cos =(id,pret,titlu,categorie,galerie,stock,atribute_marime,atribute_culoare)=>{

    return{
        type :ADAUGA_IN_COS,
        id,
        pret,
        titlu,
        categorie,
        galerie,
        stock,
        atribute_marime,
        atribute_culoare
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
           categorie:action.categorie,
           galerie:action.galerie,
           stock:action.stock,
           atribute_marime:action.atribute_marime,
           atribute_culoare:action.atribute_culoare
          }
        ];
  
      default:
        return state;
    }
  }


  const Api_Initial=[
 {
   api:  ' https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-blackmag-products',
   categorie:''
 }
  ]
  const FILTREAZA_PRODSE = 'FILTREAZA_PRODUSE';

  export  const Filtreaza_produse =(api,categorie)=>{

    return{
        type :FILTREAZA_PRODSE,
        api,
        categorie    
    }
}

  const Filtrare=(state= Api_Initial, action)=>{
    switch (action.type) {
      case FILTREAZA_PRODSE:
        return [
          ...state,
          {
           api:action.api,
           categorie:action.api
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