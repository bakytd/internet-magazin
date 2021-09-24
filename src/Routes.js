import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import AdminPage from './pages/AdminPage';
import CardPage from './pages/CardPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import BuyNotPage from './pages/BuyNotPage';
import SingInPage from './pages/SinginPage';
import SingUpPage from './pages/SingUpPage';
import BuyNotPage1 from './pages/BuyNotPage';



const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/card" component={CardPage} />
                        <Route exact path="/buy" component={BuyNotPage1}/>
                        <Route exact path="/sing-in" component={SingInPage}/>
                        <Route exact path="/sing-up" component={SingUpPage}/>


                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>

    );
};

export default Routes;