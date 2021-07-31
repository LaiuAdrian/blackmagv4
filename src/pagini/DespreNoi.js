import Footer from "../componente/Footer"
import Header from "../componente/Header"

import { StickyContainer, Sticky } from 'react-sticky';





const DespreNoi =()=>{
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
         DespreNoi
         </h2>
       </div>
        <Footer />  
        
      
      </StickyContainer>
   
    
 
        </>
       
    )
}
export default DespreNoi