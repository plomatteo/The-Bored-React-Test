import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

const RandomForm = () => {

    const { typeOption,
        setTypeOption,
        setPartecipantInput,
        partecipantInput,
        refPartecipant,
        submit,
        setSubmit,
        submitRandom,
        setSubmitRandom } = useGlobalContext();

    const handleSubmitRandom = e => {
        e.preventDefault();
        setSubmitRandom(!submitRandom);

    }

    return (
        <>
            <div className="col-12 col-md-6 py-3">
                <form className="form-task" onSubmit={handleSubmitRandom}>
                    <h1>Random Activity Generator</h1>
                    <div className="form-field">
                        <button className="btn bg-light">Random Button</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RandomForm;
