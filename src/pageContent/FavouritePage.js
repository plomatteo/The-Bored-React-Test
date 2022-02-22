import React from "react";
import RandomForm from "../components/RandomComponent";
import { useGlobalContext } from '../context/context';
import { useEffect } from "react";
import axios from 'axios'
import FavouriteList from "../components/FavouriteList";
import AddFavourite from "../components/AddFavouriteButton";

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
            url: `https://www.boredapi.com/api/activity/`,
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
                    <div className="col-12 col-md-6 py-3 align-self-start">
                        <RandomForm />
                            <h2>{dataActivity.activity}</h2>
                            <hr />
                            <AddFavourite />
                    </div>
                </div>
            </div>
        );
    }

    if (errorResponse) {
        return (
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