import React,{useState} from 'react';


const Index:React.FC = (props)=> {
    const [data, setData] = useState(0)
    let handleClick=()=>{
        console.log(data)
        setData(1)
        setData(1)
        setData(3)
        console.log(data)
    }
    return (
        <div>
            <p>{data}</p>
            <button onClick={handleClick}>按钮</button>
        </div>
    );
}

export default Index;