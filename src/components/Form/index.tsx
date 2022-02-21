import React, {DetailedReactHTMLElement} from 'react'

interface FnCb {
    (value: object): void
}

class Form extends React.Component<any, any>{
    state: any = {
        formData:{
        }
    }
    // 提交表单信息
    submitForm=(cb: FnCb)=>{
        cb(this.state.formData)
    }

    setValue=(name:string,value:string|number)=>{
        this.setState({
            formData:{
                ...this.state.formData,
                [name]:value
            }
        })
    }
    render(){
        const {children} = this.props
        const {formData} = this.state
        const newRender: object[] = []
        React.Children.forEach(children,( item: any )=>{
            if (item.type.displayName ==='formItem'){
                const {name} = item.props
                const Children = React.cloneElement(item,{
                    handleChange:this.setValue,
                    key: name,
                    value: formData[name] || ''
                })
                newRender.push(Children)
            }
        })
        return newRender
    }
}

interface FormItemProps {
    children:{type?:{displayName?:string}},
    label?: string,
    handleChange?: (name: string, value: string | number)=>void,
    value?:string|number,
    name:string
}

function FormItem(props: FormItemProps){
    const {children,label,handleChange,value,name} = props
    const onChange= (value: string | number):void=>{
        handleChange(name,value)
    }
    return <div>
        <label>{label}</label>
        {
            React.isValidElement(children) && children?.type?.displayName === 'input' ?
                React.cloneElement<any>(children,{ onChange , value }) : null
        }
    </div>

}

FormItem.displayName = 'formItem'

interface InputProps  {
    onChange?: (value: string | number)=> void,
    value?: string | number
}

function Input(props:InputProps){
    const {onChange,value} = props
    return <>
        <input onChange={(e)=> onChange(e.target.value)} value={value}/>
    </>
}
Input.displayName = 'input'

export {
    Form,
    FormItem,
    Input
}