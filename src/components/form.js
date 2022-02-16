import React from "react";
import Select from 'react-select';
import { useGlobalContext } from "../context/context";
import RandomForm from "./randomForm";


const Form = () => {

    const { 
        setTypeOption,
        setPartecipantInput,
        partecipantInput,
        submit,
        setSubmit,} = useGlobalContext();


    const options = [
        { value: 'education', label: 'Education' },
        { value: 'recreational', label: 'Recreational' },
        { value: 'social', label: 'Social' },
        { value: 'diy', label: 'Diy' },
        { value: 'charity', label: 'Charity' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'relaxation', label: 'Relaxation' },
        { value: 'music', label: 'Music' },
        { value: 'busywork', label: 'Busywork' },
    ];

    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(!submit);
    }

    return (
        <>
            <div className="row py-5">
                <div className="col-12 col-md-6 py-3">
                    <h1>Custom Activity</h1>
                    <form className="form-task" onSubmit={handleSubmit}>
                        <h4><label htmlFor="typeOfActivities">Type of activity</label></h4>
                        <div className="select-field">
                            <Select defaultValue={options[0]} className='input-query' options={options} onChange={(e) => setTypeOption(e.value)} />
                        </div>
                        <br />
                        <h4><label htmlFor="numberOfPartecipants">Participants</label></h4>
                        <div className="form-field">
                            <input className='input-query py-1 text-center' type="number" value={partecipantInput} placehonder="Partecipants" name="numberOfPartecipants" id="numberOfPartecipants" onChange={(e) => setPartecipantInput(e.target.value)} />
                        </div>
                        <br />
                        <div className="form-field">
                            <button className="btn btn-outline-success">Find activity</button>
                        </div>
                        <br />
                    </form>
                </div>
                <RandomForm/>
            </div>

        </>
    );
};

export default Form;