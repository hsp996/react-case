import React,{useEffect,useState} from 'react'
import ScrollView from '@/components/ScrollView/index'

function Item(props: { index: any; item:any }){
    const {item,index} = props
    return (
        <div style={{border:'1px solid red',margin:'30px'}}>
            <p>{index}.</p>
            <div style={{marginLeft:'10px'}}>{item.title}</div>
        </div>
    )
}


function Index(){
    const [dataList, setDataList] = useState([])
    useEffect(()=>{
        const list = [
            {title:'声乐0314正式课学员分配-小薇'},
            {title:'声乐0318正式课学员分配-小薇'},
            {title:'声乐0319正式课学员分配-小薇'},
            {title:'声乐0311正式课学员分配-小薇'},
            {title:'声乐0312正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
            {title:'声乐0315正式课学员分配-小薇'},
        ]
        setDataList((data)=>{
            return data.concat(list)
        })
    },[])
    const getData=()=>{
        const list = [
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
            {title:'声乐03正式课学员分配-小薇'},
        ]
        setDataList((data)=>{
            return data.concat(list)
        })
    }
    return (
        <ScrollView scrollToLower={getData} scroll={()=>{}} component={Item} list={dataList}>

        </ScrollView>
    )
}

export default Index