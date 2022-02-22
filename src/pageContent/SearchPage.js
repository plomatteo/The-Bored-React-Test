import React from "react";
import axios from "axios";
import { useEffect } from "react";
import CustomSearchComponent from "../components/CustomSearchComponent";
import { useGlobalContext } from "../context/context";
import AddFavourite from "../components/AddFavouriteButton";
import RandomComponent from "../components/RandomComponent";

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
            url: `https://www.boredapi.com/api/activity?participants=${partecipantInput}&type=${typeOption}`,
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
            url: `https://www.boredapi.com/api/activity/`,
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
                <div className="row py-3">
                    <CustomSearchComponent />
                    <div className="col-12 col-md-6 py-3 align-self-center">
                        <h2>{dataActivity.activity}</h2>
                        <hr />
                        <AddFavourite />
                    </div>
                </div>
            </div >
        );
    }
    if (!dataActivity.activity) {
        if (errorResponse) {
            return (
                <div id='main-content' className="container">
                    <div className="row py-3">
                        <CustomSearchComponent />
                    </div>
                    <div className="col-12 col-md-6 py-3 align-self-center">
                        <h1>Server non raggiungibile</h1>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='main-content' className="container">
                    <div className="row py-3">
                        <CustomSearchComponent />
                        <div className="col-12 col-md-6 py-3 align-self-center">
                            <h1>Attività non trovata</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default SearchContent;