import React, { useState } from 'react'
import "../App.css"
export default function ListView() {
    const [input, setInput] = useState("")
    const [alldata, setAlldata] = useState([])
    function setData() {
        !alldata.includes(input) ? setAlldata([...alldata, input]) : alert("same Data Found")
        setInput("")
    }
    const removeData = (index) => {
        let oldData = [...alldata]
        let filterData = oldData.filter((item, i) => i != index)
        setAlldata(filterData)
    }
    return (
        <div className='input-wrapper'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your text....!' />
            <button onClick={() => setData()}>Add List</button>
            <ul>
                {alldata.length == 0 ? "No Data Found" :
                    alldata.map((element, i) => {
                        return <li key={i}>{element} <button onClick={() => removeData(i)}>Delete</button> </li>
                    })
                }
            </ul>
        </div>
    )
}
