import React from 'react';
import InputPage from './InputPage';
import ResultPage from './ResultPage';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact={true} path="/result">
                    <ResultPage />
                </Route>
                <Route exact={true} path="/">
                    <InputPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;