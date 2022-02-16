import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Form from "./form";
import { useGlobalContext } from "../context/context";
import AddFavourite from "./FavouriteButton";

const SearchContent = () => {

    const { typeOption,
        partecipantInput,
        submit,
        submitRandom,
        setDataActivity,
        dataActivity,
        setErrorResponse,
        errorResponse,
    } = useGlobalContext();

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://www.boredapi.com/api/activity?participants=${partecipantInput}&type=${typeOption}`,
        })
            .then(response => {
                setDataActivity(response.data);
            })
            .catch(error => {
                setErrorResponse(error);
            });
    }, [submit]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://www.boredapi.com/api/activity/`,
        })
            .then(response => {
                setDataActivity(response.data);
            })
            .catch(error => {
                setErrorResponse(error);
            });
    }, [submitRandom])

    if (dataActivity.activity) {
        return (
            <div id='main-content' className="container">
                <Form />
                <h2>{dataActivity.activity}</h2> <AddFavourite />
            </div >
        );
    }
    if (!dataActivity.activity) {
        if (errorResponse) {
            return (
                <div id='main-content' className="container">
                    <Form />
                    <h1>Server non raggiungibile</h1>
                </div>
            )
        }
        else {
        return (
            <div id='main-content' className="container">
                <Form />
                <h1>Attività non trovata</h1>
            </div>
        )
    }
}
};

export default SearchContent;