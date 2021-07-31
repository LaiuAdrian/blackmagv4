import Footer from "../componente/Footer"
import Header from "../componente/Header"

import { StickyContainer, Sticky } from 'react-sticky';


const x=[0,1,2,3,4,5,15,]

for(let i=0;i<x.length;i++){
   if ((x[i] %5 ===0) && (x[i] %3 ===0)){
    console.log('FuzzBizz')
  }
  else if(x[i] % 3 === 0){
    console.log('Fizz')
  }
  else if(x[i] %5 ===0){
    console.log('Bizz')
  }
  else
  console.log(x[i])

}



const Contact =()=>{
    return(
        <>
        <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
          {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
     
              <Header />
      
          )}
        </Sticky>
        <div>
         <h2 className="h2_bg">
          Contact
         </h2>
       </div>
        <Footer />  
      
      </StickyContainer>
   
    
 
        </>
       
    )
}
export default Contact