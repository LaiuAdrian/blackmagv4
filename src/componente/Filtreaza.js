



// import axios from "axios";
import { useDispatch } from 'react-redux';
import { Filtreaza_produse } from '../reducers';
import rosu from '../img/culori/rosu.png'  
import negru from '../img/culori/negru.png'  
import alb from '../img/culori/alb.png'  
import albastru from '../img/culori/albastru.png'  
const Filtreaza =()=>{
const api ="https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-blackmag-products"
const categorie_tricouri="https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-category-product/tricouri"
const categorie_hanorace="https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-category-product/hanorace"
    const dispatch = useDispatch();
    return(
        <>
         <div className="filtreaza">
             <p className="filtraza_titlu">Alege categoria </p>
             <div> 
                <div className="filtreaza_categorie"
                 onClick={()=>{
                    dispatch(Filtreaza_produse(api,categorie_tricouri))
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
                        dispatch(Filtreaza_produse(categorie_hanorace))
                    }}>
                        <p >
                        Hanorace
                        </p>
                        <img className ='img_produs' src={'https://magazinhaine.s3.eu-central-1.amazonaws.com/b281937ce17ce990a632ade5d931ea6f'} alt={'nik'} />
                    </div>
         
             </div>
             <p className="filtraza_titlu">Culoare:</p>
              <div className="filtreaza_categorie">
                 <img  onClick={()=>{
                        dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                    }} className ='img_culoare' src={alb} alt={'nik'} 
                />
                       <img  onClick={()=>{
                        dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/negru'))
                    }} className ='img_culoare' src={negru} alt={'nik'} 
                />
               
             </div>
             <div className="filtreaza_categorie">
                 <img  onClick={()=>{
                        dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                    }} className ='img_culoare' src={rosu} alt={'nik'} 
                />
                       <img  onClick={()=>{
                        dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/negru'))
                    }} className ='img_culoare' src={albastru} alt={'nik'} 
                />
               
             </div>
             <p className="filtraza_titlu">Marime:</p>
             <div className="filtreaza_categorie">
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     XS
                 </p>
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     S
                 </p>
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     M
                 </p>
             </div>
             <div className="filtreaza_categorie">
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     L
                 </p>
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     XL
                 </p>
                 <p className="filtreaza_marime" 
                //    onClick={()=>{
                //     dispatch(Filtreaza_produse('https://blackmagback.herokuapp.com/black-mag/api/v1/product/get-all-product-by-color/alb'))
                // }} className ='img_culoare' src={rosu} alt={'nik'} 
                >
                     XXL
                 </p>
             </div>
         </div>
         
        </>
             
    )
}


  export default Filtreaza;