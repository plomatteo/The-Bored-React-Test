import React from "react";
import RandomForm from "./randomForm";
import { useGlobalContext } from '../context/context';
import { useEffect } from "react";
import axios from 'axios'
import FavouriteList from "./FavouriteList";
import AddFavourite from "./FavouriteButton";

const FavouriteContent = () => {

    const {
        submitRandom,
        setDataActivity,
        dataActivity,
        favourite,
        setFavourite,
        errorResponse,
        setErrorResponse, } = useGlobalContext();


    const removeItem = (x) => {
        setFavourite(favourite.filter((el) => el.id !== x));

    };

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

    if (dataActivity) {
        return (
            <div id='main-content' className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-6 py-3">
                        <h1>Favourite Activities</h1>
                        <div className="people-list">
                            <FavouriteList data={favourite} removeItem={removeItem} />
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-outline-danger" onClick={() => setFavourite([])}>
                                {" "}
                                Remove All
                            </button>
                        </div>

                    </div>
                    <RandomForm />
                </div>
                <h2>{dataActivity.activity}</h2> <AddFavourite />
            </div>
        );
    }

    if (errorResponse) {
        return(
        <div id='main-content' className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-6 py-3">
                        <h1>Favourite activities</h1>
                        <div className="people-list">
                            <FavouriteList data={favourite} removeItem={removeItem} />
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-outline-danger" onClick={() => setFavourite([])}>
                                {" "}
                                Remove All
                            </button>
                        </div>

                    </div>
                    <RandomForm />
                </div>
                    <h1>Server non raggiungibile</h1>
            </div>
            )
    }
};

export default FavouriteContent;