import React,{useContext} from "react";
import {matchPath} from "react-router";
import {RouterContext} from "./router";

export default function Route(props){
    const context = useContext(RouterContext)
    // 获取location 信息
    const location = props.location || context.location
    // 是否匹配当前路由，如果父级有Switch ,就会传入 computedMatch来精准匹配渲染当前路由
    const match = props.computedMatch ? props.computedMatch : props.path ? matchPath(location.pathname,props) : context.match
    // 用于传递给路由组件
    const newRouterProps={...context,location,match}
    let {children,component,render} = props
    if (Array.isArray(children) && Array.length === 0) children = null
    let renderChildren = null
    if (newRouterProps.match){
        if (children){
            renderChildren = typeof children === 'function' ? children(newRouterProps) : children
        }else if (component){
            renderChildren = React.createElement(component,newRouterProps)
        }else if(render){
            renderChildren = render(newRouterProps)
        }
    }
    return <RouterContext.Provider value={newRouterProps}>
        {renderChildren}
    </RouterContext.Provider>
}