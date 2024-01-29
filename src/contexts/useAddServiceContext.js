import { createContext, useContext, useState } from "react";

const AddService = createContext({serviceData: "", setServiceData: null})


export function UseContextProvider({ children }) {

    const [userData, setUserData] = useState("");
  
    return (
      <>
      <AddService.Provider value={{ userData, setUserData }}>
        {children}
      </AddService.Provider>
      </>
    );
  }
  
  export function useAddServiceContext() {
    const { userData, setUserData } = useContext(AddService);
    return { userData, setUserData };
  }