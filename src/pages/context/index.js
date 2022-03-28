import style from './index.module.scss'
import React, {Component, useContext, useEffect} from 'react'
const ThemeContext = React.createContext(null)
const theme = { //主题颜色
    dark:{  color:'#1890ff' , background:'black', border: '1px solid blue' ,type:'dark',  },
    light:{  color:'#fff' , background:'#fc4838', border: '1px solid pink' ,type:'light'  }
}

function  Checkbox (props){
    const { label ,name, onChange } = props
    const { type , color } = React.useContext(ThemeContext)
    return <div className="checkbox" >
        <label htmlFor="name" > {label} </label>
        <input type="checkbox" onChange={onChange} id={name} value={type} name={name} checked={ type === name }  style={{ color } } />
    </div>
}


class App extends React.Component{
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (contextValue)=> {
                        const {color, border, setTheme, background} = contextValue
                        return (
                            <div>
                                <span>选择主题</span>
                                <Checkbox label='light' name='light' onChange={() => setTheme(theme.light)}/>
                                <Checkbox label='dark' name='dark' onChange={() => setTheme(theme.dark)}/>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }

}


function Demo() {
    useEffect(()=>{
        console.log(123)
    })
    return (
        <App />
    )
}

// class App extends React.Component{
//     static contextType = ThemeContext
//     constructor(props) {
//         super(props);
//     }
//     componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
//
//     }
//
//     render() {
//         const {color,border,setTheme,background} = this.context
//         return (
//              <div style={{border,color,background}}>
//                  <div>
//                      <span>选择主题</span>
//                      <Checkbox label='light' name='light' onChange={()=>setTheme(theme.light)} />
//                      <Checkbox label='dark' name='dark' onChange={()=>setTheme(theme.dark)} />
//                  </div>
//              </div>
//         )
//     }
// }

export default function (){
    const [ themeContextValue ,setThemeContext ] = React.useState(theme.dark)
    return <ThemeContext.Provider value={{ ...themeContextValue, setTheme:setThemeContext  }}>
                <Demo/>
    </ThemeContext.Provider>
}