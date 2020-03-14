import { useContext, useEffect, useRef, useCallback } from 'react';

import { AppContext, DispatchContext } from './App';

export const useTitle = (title) => {
    const previousTitleRef = useRef();
    useEffect(() => {
        previousTitleRef.current = document.title;
        return () => {
            document.title = previousTitleRef.current;
        };
    }, []);
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