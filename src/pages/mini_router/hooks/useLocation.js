import {useContext} from "react";
import {RouterContext} from "../components/router";

export default function useLocation(){
    return useContext(RouterContext).location
}