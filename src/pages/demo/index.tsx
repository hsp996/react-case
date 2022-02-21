import React,{useRef} from 'react'
import {FormItem,Form,Input} from "../../components/Form";

const Index=function (){
    const formRef = useRef(null)
    const onSubmit=()=>{
        formRef.current.submitForm((value: any)=>{
            console.log(value)
        })
    }
    return <div>
        <Form ref={formRef}>
            <FormItem name={'account'} label={'账户'}>
                <Input/>
            </FormItem>

            <FormItem name={'password'} label={'密码'}>
                <Input/>
            </FormItem>
        </Form>
        <button onClick={onSubmit}>提交</button>
    </div>
}

export  default  Index