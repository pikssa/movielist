import React,{memo} from 'react';
import {NavList,LinkStyled} from './NavStyled';
import {useLocation} from 'react-router-dom';

const LINKS=[
{to:'/',text:'Home'},
{to:'/starred',text:"Popular"}
]

const Navs=()=>{
const location=useLocation();

return(
<div>
<NavList>
{
LINKS.map((items)=>{
return(
<li key={items.to}>
<LinkStyled to={items.to} className={items.to ===location.pathname ? 'active':''}>{items.text}</LinkStyled>
</li>
)
})
}
</NavList>
</div>
);
};
export default memo(Navs);














