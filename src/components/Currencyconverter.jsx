import { useState } from 'react';
import { useExchangerateContext } from "../contexts/ExchangerateContext";


const CurrencyConverter = () => {
    const { rates, loading, error } = useExchangerateContext();
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const handleConversion = () => {
        if (rates && rates[fromCurrency] && rates[toCurrency]) {
            const conversionRate = rates[toCurrency] / rates[fromCurrency];
            setConvertedAmount(amount * conversionRate);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-400">Currency Converter</h1>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                        From
                    </label>
                    <select
                        id="from"
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                        To
                    </label>
                    <select
                        id="to"
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleConversion}
                    className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                    Convert
                </button>
                {convertedAmount !== null && (
                    <div className="mt-4 p-4 bg-blue-100 rounded-md text-center text-blue-700 font-semibold">
                        Converted Amount: {toCurrency} {convertedAmount.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CurrencyConverter;
