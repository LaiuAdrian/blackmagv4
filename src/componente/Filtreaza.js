



// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Filtreaza_produse } from '../reducers';
    
const Filtreaza =()=>{
    const Filtrare = [...useSelector(state => state.Filtrare)];
    const dispatch = useDispatch();
    return(
        <>
         <div className="filtreaza">
             <p className="filtraza_titlu">Alege categoria </p>
             <div> 
                <div className="filtreaza_categorie"
                 onClick={()=>{
                    dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-blackmag-products'))
                   }}>
                    <p >
                       Toate Categoriile
                    </p>

                </div>
                <div className="filtreaza_categorie" 
                onClick={()=>{
                    dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-category-product/tricouri'))
                }}>
                        <p >
                        Tricouri
                        </p>
                        <img className ='img_produs' src={'https://magazinhaine.s3.eu-central-1.amazonaws.com/80cbbf316c5997ff567809367b8584c1'} alt={'nik'} />
                    </div>
                    <div className="filtreaza_categorie"
                    onClick={()=>{
                        dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-category-product/hanorac'))
                    }}>
                        <p >
                        Hanorace
                        </p>
                        <img className ='img_produs' src={'https://magazinhaine.s3.eu-central-1.amazonaws.com/b281937ce17ce990a632ade5d931ea6f'} alt={'nik'} />
                    </div>
         
             </div>
         </div>
        </>
             
    )
}


  export default Filtreaza;