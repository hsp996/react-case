import React,{Component} from 'react'

class Index extends React.Component<any, any>{
    state={
        number:1
    }
    onChange=()=>{
        debugger
        this.setState((state: { number: number }, props: any)=>{
            return {
                number: state.number+1
            }
        })
    }
    render() {
        const {number} = this.state
        return (
            <div>
                <div>{number}</div>
                <button onClick={this.onChange}>+1</button>
            </div>
        )
    }
}
export default Index