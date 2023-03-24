import {Outlet} from 'react-router-dom';
//import components
import MainNavBar from './components/mainNavbar';

const RootComponent = ()=>{

    return(<>
        <h1>zd</h1>
        <Outlet/>
        <MainNavBar/>
        //El contenido base
        
    </>)
}


export default RootComponent;