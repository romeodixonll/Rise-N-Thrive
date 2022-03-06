import { useState } from "react";

const useHttp = (requestConfig, applyDataFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async() => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }
            );
            if (!response.ok) {
                throw new Error('Request failed!');
            };

            const data = await response.json();
            applyDataFunction(data);
        } catch (err) {
            setIsLoading(false)
            setError(err)
            console.log(err)
        }
    }

    return {
        isLoading,
        error,
        sendRequest,
    }

}

export default useHttp;