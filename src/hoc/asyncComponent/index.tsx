import React from 'react'

const AsyncComponent = (Component: any, api: () => any)=>{
    const AsyncComponentPromise: any = ()=> new Promise(async (resolve) => {
        const data =  await api()
        resolve({
            default : (props: JSX.IntrinsicAttributes) => <Component rdata = {data} {...props} />
        })
    })
    return React.lazy(AsyncComponentPromise)
}


export default AsyncComponent