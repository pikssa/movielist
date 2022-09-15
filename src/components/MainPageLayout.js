import React from 'react';
import Navs from './Navs';
import Title from './Title';
const MainPageLayOut=({children})=>{
return(
<div>
<Title title="Movie List" 
subTitle="Are you Looking for a Movie or an actor?"/>
<Navs />    
{children}
</div>
)
}
export default MainPageLayOut;










    


     
