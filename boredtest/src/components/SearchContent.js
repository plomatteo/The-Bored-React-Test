import React from "react";
import axios from "axios";
import { useEffect, useState  } from "react";
import Form from "./form";
import { useGlobalContext } from "../context/context";

const SearchContent = () => {

    const { typeOption,
        partecipantInput,
        submit,
        submitRandom } = useGlobalContext();

    const [dataActivity, setDataActivity] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://www.boredapi.com/api/activity?participants=${partecipantInput}&type=${typeOption}`,
        })
            .then(response => {
                setDataActivity(response.data); console.log(response.data)
            });
    }, [submit]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://www.boredapi.com/api/activity/`,
        })
            .then(response => {
                setDataActivity(response.data); console.log(response.data)
            });
    }, [submitRandom])

    if (dataActivity.activity) {
        return (
            <div id='main-content' className="container">
                <Form />
                <h1>{dataActivity.activity}</h1>
            </div>
        );
    }
    if (!dataActivity.activity) {
        return (
            <div id='main-content' className="container">
                <Form />
                <h1>Attività non trovata</h1>
            </div>
        )
    }
};

export default SearchContent;