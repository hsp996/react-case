import './App.css';
import React from 'react'
import {BrowserRouter, useHistory, Redirect} from "react-router-dom";
import {renderRoutes, } from "react-router-config";
import Context from './pages/context'
import UseMemo from '@/pages/use-memo'
import Index from './pages/demo'

const routerList = [
    {
        name:'context',
        path:'/context',
        component: Context
    },
    {
        name:'demo',
        path:'/demo',
        component: Index
    },
    {
        name:'memo',
        path:'/memo',
        component: UseMemo
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
        <Redirect from={'/'} to={'/demo'} />
    </BrowserRouter>
  );
}

export default App;
