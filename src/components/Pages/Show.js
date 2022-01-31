import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../show/Details';
import Seasons from '../show/Seasons';
import ShowMainData from '../show/ShowMainData';
import Cast from '../show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.Styled';
import { useShow } from '../../misc/CustomHooks';
const Show=()=>{
const {id}=useParams();
const{show,isLoading,error}=useShow(id);
if(isLoading){
return <div>Data is being Loaded</div>    
}
if(error)
{
return <div>error occured {error}</div>    
}
return(
<ShowPageWrapper>
<ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />
<InfoBlock>
<h1>Details</h1>
<Details status={show.status} network={show.network} premiered={show.premiered}/>
</InfoBlock>
<InfoBlock>
<h1>Seasons</h1>
<Seasons seasons={show._embedded.seasons}/>
</InfoBlock>

<InfoBlock>
<h1>Cast</h1>
<Cast  cast={show._embedded.cast}/>
</InfoBlock>
</ShowPageWrapper>
)
}
export default Show;

















