// import React from 'react'
import { useExchangerateContext } from "../contexts/ExchangerateContext";
import DisplayError from "../pages/ErrorPage";
import CurrencyConverter from "./Currencyconverter";


const Home = () => {
    const {loading, error} = useExchangerateContext()
  return (
    <div>
        {loading ? (<p>Loading...</p>): error ? (<DisplayError errorMessage={error}/>):
        (<div>
            <CurrencyConverter/>
        </div>)}
    </div>
  )
}

export default Home