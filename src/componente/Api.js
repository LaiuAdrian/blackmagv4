
import axios from "axios";
import { useEffect, useState } from "react";






const Api=()=>{
  const url = 'https://blackmagback.herokuapp.com/black-mag/api/v1/category/get-all-cateogry-balck-mag'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])
  console.log(data)
  
    return(
        <h1>Api</h1>
    )
}


export default Api;