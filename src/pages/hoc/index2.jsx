import React from 'react'

class Index extends React.Component{
    render() {
        return <div>
            <p> react  </p>
            <p> vue    </p>
            <p> angular</p>
        </div>
    }
}


function HOC(Component){
    return class Advance extends Component{
        render() {
            const element = super.render()
            const addElement = React.createElement('div',{},'hello world')
            const newChild = React.Children.map(element.props.children,((child, index) => {
                if (index === 2 ) {
                    return addElement
                }else {
                    return  child
                }
            }))
            console.log(newChild)
            return React.cloneElement(element,{},newChild)
        }
    }
}

export default HOC(Index)