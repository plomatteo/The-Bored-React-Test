import { useContext, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [typeOption, setTypeOption] = useState('education');
    const [partecipantInput, setPartecipantInput] = useState(1);
    const [submit, setSubmit] = useState(true);
    const [submitRandom, setSubmitRandom] = useState(true);
    const [dataActivity, setDataActivity] = useState([]);
    const [favourite, setFavourite] = useState([
        {
            id: 1,
            title: "Check mail urgenti",
            description: "Ogni mattina entro le 9.00 eseguire check mail urgenti",
        },
        {
            id: 2,
            title: "Fare una pausa",
            description: "Staccare gli occhi dallo schermo e alzarsi dalla scrivania per 15 minuti",
        },
        {
            id: 3,
            title: "Nutrire il gatto",
            description: "Dare da mangiare al gatto",
        },
    ]);

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
        }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext };