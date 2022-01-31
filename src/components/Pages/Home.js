import React,{ useState,useCallback } from 'react';
import MainPageLayOut from '../MainPageLayout';
import { apiGet } from '../../misc/config';
import ShowGrid from '../Grid/ShowGrid';
import ActorGrid from '../Actor/ActorGrid';
import { useLastQuery } from '../../misc/CustomHooks';
import { SearchButtonWrapper, SearchInput } from './HomeStyle';
import {RadioInputsWrapper} from './HomeStyle';
import CustomRadio from '../CustomRadio';



const Home=()=>{
const[input,setInput]=useLastQuery();
const[results,setResults]=React.useState(null);
const[searchOption,setSearchOption]=React.useState('shows');
const isShowsSearch=searchOption==='shows';
const onInputChange=React.useCallback(ev=>{
setInput(ev.target.value);
},[setInput]);
const onSearch=()=>{
apiGet(`/search/${searchOption}?q=${input}`).then((result)=>{
setResults(result);
})
}
const renderResult=()=>{
if(results && results.length===0)
{
return <div>No Record</div>    
}
if(results && results.length>0)
{
return results[0].show ? (
<ShowGrid data={results}/>    
):(
<ActorGrid data={results}/>
)
}
return null;
}
const onKeyDown=(ev)=>{
if(ev.keyCode===13)
{
onSearch();
}
}
const onRadioChange=React.useCallback(ev  =>{
console.log(ev.target.value);
setSearchOption(ev.target.value);
},[]);
return(
<MainPageLayOut>
<SearchInput 
type='text'
placeholder='search something'
onChange={onInputChange}
value={input}
onKeyDown={onKeyDown}
/>
<RadioInputsWrapper>
<div>          

<CustomRadio
label="Shows"
id='shows-search'
value='shows'
onChange={onRadioChange}
checked={isShowsSearch}
/>
</div>
<div>
<CustomRadio
label="Actors"
id='actors-search'
value='people'
onChange={onRadioChange}
checked={!isShowsSearch}
/>
</div>
</RadioInputsWrapper>
<SearchButtonWrapper>
<button type='button'  onClick={onSearch}>Search</button>
{renderResult()}
</SearchButtonWrapper>
</MainPageLayOut>
)
}
export default Home;



















