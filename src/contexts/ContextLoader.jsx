import { createContext, useContext, useState } from "react";

const ContextLoader = createContext();

const LoaderProvider = ({children}) => {
    const  [isLoading, setIsLoading] = useState (false);                                // CREO UNO STATO PARTENDO DALLA CONDIZIONE FALSE //
    const loaderData ={
        isLoading,
        setIsLoading,
    };

    return (
        <ContextLoader value={loaderData} >
            {children}
        </ContextLoader>
    );
};
const useLoader = () =>useContext(ContextLoader);                                        // USELOADER CHE UTILIZZA I DATI //

export { LoaderProvider, useLoader };