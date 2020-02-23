import React, { useReducer } from 'react';
import TopBar from './TopBar';
import InputPage from './InputPage';
import ResultPage from './ResultPage';
import AboutPage from './AboutPage';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducer from './reducer';
import defaultState from './defaultState';

export const AppContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    
    return (
        <AppContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div className="container">
                        <TopBar />
                        <Switch>
                            <Route exact={true} path="/result">
                                <ResultPage />
                            </Route>
                            <Route exact={true} path="/about">
                                <AboutPage />
                            </Route>
                            <Route exact={true} path="/">
                                <InputPage />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </DispatchContext.Provider>
        </AppContext.Provider>
    );
}

export default App;
