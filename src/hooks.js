import { useEffect, useContext, useCallback } from 'react';

import { AppContext, DispatchContext } from './App';

export const useTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export const useAction = (type) => {
    const dispatch = useContext(DispatchContext);
    
    return useCallback((payload) => {
        dispatch({
            type,
            payload,
        });
    }, [dispatch, type]);
};

export const useSelector = (selector) => {
    const state = useContext(AppContext);
    
    return selector(state);
};