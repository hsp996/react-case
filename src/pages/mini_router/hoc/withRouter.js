import hoistNonReactStatics from "hoist-non-react-statics";
import {useContext} from "react";
import {RouterContext} from "../components/router";

function withRouter(Component){
    const withComponent = (props)=>{
        const { wrappedComponentRef, ...remainingProps } = props
        const context = useContext(RouterContext)
        return <Component
            {...context}
            {...remainingProps}
            ref = {wrappedComponentRef}
        />
    }
    return hoistNonReactStatics(withComponent,Component)
}