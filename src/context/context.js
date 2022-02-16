import { useContext, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [typeOption, setTypeOption] = useState('education');
    const [partecipantInput, setPartecipantInput] = useState(1);
    const [submit, setSubmit] = useState(true);
    const [submitRandom, setSubmitRandom] = useState(true);
    const [dataActivity, setDataActivity] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [errorResponse, setErrorResponse]=useState(false);

    return <AppContext.Provider value={
        {
            typeOption,
            setTypeOption,
            partecipantInput,
            setPartecipantInput,
            submit,
            setSubmit,
            submitRandom,
            setSubmitRandom,
            dataActivity,
            setDataActivity,
            favourite,
            setFavourite,
            errorResponse,
            setErrorResponse,
        }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext };