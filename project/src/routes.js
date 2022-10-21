import React from "react";
import { LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, ORDERS_ROUTE, BASKET_ROUTE } from './utils/consts';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import Orders from './pages/Orders';
import Basket from './pages/Basket';


export const routes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: ORDERS_ROUTE,
        element: <Orders/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
]