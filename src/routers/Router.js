import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { MasValoradas } from '../components/MasValoradas'
import { MenosValoradas } from '../components/MenosValoradas'
import { NavBar } from '../components/NavBar'
import { Todas } from '../components/Todas'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Todas} />
                    <Route exact path="/masvaloradas" component={MasValoradas} />
                    <Route exact path="/menosvaloradas" component={MenosValoradas} />
                    <Route exact path="/account/login" component={LoginScreen} />
                    <Route exact path="/account/register" component={RegisterScreen} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
