import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { routes } from '../routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((obj) => 
                <Route key={obj.path} path={obj.path} element={obj.element}/>
            )}
        </Routes>
    );
}

export default AppRouter;
