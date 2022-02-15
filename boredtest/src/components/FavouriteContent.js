import React from "react";
import RandomForm from "./randomForm";
import { useGlobalContext } from '../context/context';
import { useEffect, useState } from "react";
import axios from 'axios'
import FavouriteList from "./FavouriteList";

const FavouriteContent = () => {

    const {
        submitRandom,
        setDataActivity,
        dataActivity,
        favourite,
        setFavourite } = useGlobalContext();


    const removeItem = (id) => {
        setFavourite((oldValue) => oldValue.filter((value) => value.id !== id));
    };

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://www.boredapi.com/api/activity/`,
        })
            .then(response => {
                setDataActivity(response.data.activity);
            });
    }, [submitRandom])

    if (dataActivity) {
        return (
            <div id='main-content' className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-6 py-3">
                        <h1>Favorites activities</h1>
                        <div className="people-list">
                            <FavouriteList data={favourite} removeItem={removeItem} />
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-delete" onClick={() => setFavourite([])}>
                                {" "}
                                Remove All
                            </button>
                        </div>

                    </div>
                    <RandomForm />
                </div>
                <h1>{dataActivity}</h1>
            </div>
        );
    }
};

export default FavouriteContent;