import {createBrowserRouter} from 'react-router-dom';

//components 
import RootComponent from '../RootComponent';
import ProductsViews from '../views/productsViews';
import HomeViews from '../views/homeViews';
import UserViews from '../views/UserViews';

export const router = createBrowserRouter([
    {
        path: '/',
        Element:<RootComponent/>,
        children:[
            {
                index:true,
                element:<HomeViews/>,
            },
            {
                path:"/product",
                element:<ProductsViews/>,
            },
            {
                path:"/users",
                element:<UserViews/>,
            }
        ]
    }
])