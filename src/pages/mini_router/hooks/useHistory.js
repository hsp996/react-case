import {useContext} from "react";
import {RouterContext} from "../components/router";

export default  function useHistory() {
    return useContext(RouterContext).history
}