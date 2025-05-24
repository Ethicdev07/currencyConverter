/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
const APP_ID = import.meta.env.VITE_APP_ID;

// eslint-disable-next-line react-refresh/only-export-components
const ExchangerateContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useExchangerateContext = () => {
    return useContext(ExchangerateContext)
};

const ExchangeProvider = ({children}) => {
    const [rates, setRates] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("");
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`;
  

    useEffect(()=> {
        console.log("hello use effect")
        fetchRates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log("rates", rates);
    console.log("error", error);


    const fetchRates = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if(data.status === "error"){
                throw new Error(data.message);
            }
            setRates(data.rates);
            console.log(data);
        } catch (error) {
            console.log(error);
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const values = {
        loading,
        rates,
        setRates,
        fetchRates,
        error,
        setError,
    };

    return (
        <ExchangerateContext.Provider value={values}>{children}</ExchangerateContext.Provider>
      );
};



export default ExchangeProvider