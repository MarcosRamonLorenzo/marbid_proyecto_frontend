import { useContext } from "react";
import { alertsContext } from "@/contexts/AlertsProvider";

const useAlert = ()=>{
    const alertContext = useContext(alertsContext);
    return alertContext;
}

export default useAlert;