import React from "react";
import InputForm from "./InputForm";
import { useHistory } from 'react-router-dom';

export default function InputPage(props) {
    const history = useHistory();
    const onSubmit = (data, imageWidth, imageHeight, width, k) => {
        history.push({
            pathname: "/result",
            state: {data, imageWidth, imageHeight, width, k},
        });
    };
    
    return (
        <InputForm onSubmit={onSubmit} />
    );
}