import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Starred from './components/Pages/Starred';
import Home from './components/Pages/Home';
import Show from './components/Pages/Show';
import { ThemeProvider } from 'styled-components';

const theme = {
mainColors: {
blue: '#2400ff',
gray: '#c6c6c6',
dark: '#353535',
},
};
function App() {
return (   
<ThemeProvider theme={theme}>   
<Switch>
<Route exact path='/'>
<Home />
</Route>  
<Route exact path='/starred' >
<Starred/>
</Route>
<Route exact path='/show/:id'>
<Show/>
</Route>
<Route>
This is 404 page
</Route>
</Switch>
</ThemeProvider>   
)
}
export default App;


