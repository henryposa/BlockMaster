import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { MasValoradas } from '../components/MasValoradas'
import { MenosValoradas } from '../components/MenosValoradas'
import { NavBar } from '../components/NavBar'
import { Todas } from '../components/Todas'

export const Router = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=44336cc14052924d5448b206b464a1d1&language=en-US&page=1'
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }
        getMovies()
    }, [])
    console.log("resultados: ", movies)
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/"
                        render={() => (
                            <Todas
                                movies={movies}
                            />
                        )}
                    />
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
