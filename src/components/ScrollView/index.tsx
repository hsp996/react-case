import React from 'react'
import _ from 'lodash'


class ScrollView extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list:[]
        }
        this.handleScrollToLower = _.debounce(this.handleScrollToLower,500)
        this.handlerScroll = this.handlerScroll.bind(this)
    }
    node: any = null

    static getDerivedStateFromProps(newProps: any){
        console.log(newProps)
        const {list} = newProps
        return {
            list:list || []
        }
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any | null {
        return this.node.scrollHeight
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log(this.node.scrollHeight)
        console.log(snapshot)
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handlerScroll)
    }

    handlerScroll(e: any){
        console.log(e)
        this.handleScrollToLower()
    }
    handleScrollToLower(){
        const {scrollToLower} = this.props
        const {scrollHeight,scrollTop,offsetHeight} = this.node
        if (scrollHeight === (scrollTop + offsetHeight)){
            console.log('到底了')
            scrollToLower && scrollToLower()

        }
    }
    render() {
        const {component} = this.props
        const {list} = this.state
        return <div ref={node=> this.node = node}>
            {
                list.map((item: any, index: any)=>{
                    return React.createElement(component,{item,key:index,index})
                })
            }
        </div>;
    }
}


export default ScrollView