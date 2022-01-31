import React,{memo} from 'react';
import { TitleWrapper } from './TitleStyled';



const Title=({title,subTitle})=>{
return(    
<TitleWrapper>
<h1>{title}</h1>
<p>{subTitle}</p>
</TitleWrapper>
)
}
export default memo(Title);








