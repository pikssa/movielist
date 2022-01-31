import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useShows } from '../../misc/CustomHooks';
import MainPageLayOut from '../MainPageLayout';
import {apiGet} from '../../misc/config';
import ShowGrid from '../../components/Grid/ShowGrid';

const Starred=()=>{
const[starred]=useShows();
const[shows,setShows]=React.useState(null);
const[isLoading,setIsLoading]=React.useState(true);
const[error,setError]=React.useState(null);

useEffect(()=>{
if(starred && starred.length>0)
{
const promises=starred.map(showId=>apiGet(`/shows/${showId}`))
Promise.all(promises)
.then(apiData=>apiData.map(show=>({show})))
.then((results)=>{
console.log(results);      
setShows(results);
setIsLoading(false);
}).catch((error)=>{
setError(error.message);    
setIsLoading(false);  
});
}
else
{
setIsLoading(false);      
}
},[starred]);
return(
<MainPageLayOut>
{isLoading && <div>Show are Still Loading</div>}
{error && <div>Error occured {error}</div>}
{!isLoading && !shows &&<div>no shows were added</div> }
{!isLoading && !error && shows && <ShowGrid data={shows}/>}
</MainPageLayOut>
)
}
export default Starred;



     







