import './App.css';
import React from 'react'
import {BrowserRouter, useHistory, Redirect} from "react-router-dom";
import {renderRoutes } from "react-router-config";
import UseMemo from '@/pages/useMemo'
import Demo from './pages/demo'
import RenderList  from '@/pages/renderList'
import GreenSock from "./pages/greensock";
const routerList = [
    {
        name:'context',
        path:'/context',
        component: RenderList
    },
    {
        name:'demo',
        path:'/demo',
        component: Demo
    },
    {
        name:'memo',
        path:'/memo',
        component: UseMemo
    },
    {
        name:'greensock',
        path:'/greensock',
        component: GreenSock
    }
]
const Menu = function (){
    const history = useHistory()
    return (
        <div className='router_style'>
            {
                routerList.map(item=>{
                    return  <div key={item.path} className='router_link'  onClick={
                        ()=>{
                            history.push(item.path)
                        }
                    }>
                        {item.name}
                    </div>
                })
            }
        </div>
    )
}

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        {
            renderRoutes(routerList)
        }
        <Redirect from={'/'} to={'/context'} />
    </BrowserRouter>
  );
}

export default App;
