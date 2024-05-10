import { useState } from 'react';
import axios from 'axios';

const useFech = () => {
 const [apiData, setApiData] = useState();
 const [isLoading, setIsLoading] = useState(true);
 const [hasError, setHasError] = useState(false);

 const getApi = url =>{
  axios.get(url)
    .then(res => {
      setApiData(res.data)
      setHasError(false)
    })
    .catch(err => {
      setHasError(true);
      console.log(err);
    })
    .finally(() =>{
      setIsLoading(false);
    })
 }
 return [apiData, getApi, isLoading, hasError];
}

export default useFech;