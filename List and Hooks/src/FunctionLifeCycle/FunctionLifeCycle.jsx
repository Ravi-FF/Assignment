import React, { useEffect, useRef, useState } from 'react'

export default function FunctionLifeCycle() {
    const [fatchData, setFatchData] = useState([])
    const [count, setCount] = useState(1)

    // usEffect with blank dependencey 
    useEffect(() => {
        const FatchData = async () => {
            const response = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
            setFatchData(await response)
        }
        FatchData()
    }, [])


    // usEffect without any dependencey array

    useEffect(() => console.log("useEffect calling"))
    // This useEffect is called when my state is changing and my compnent is re rendering


    return (
        <div style={{ fontFamily: "cursive" }}>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Function componant Life Cycle in React JS</h1>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>website</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>address</th>
                            <th>zip Code</th>
                            <th>company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fatchData.length == 0 ? <tr>
                            <td>Data is Loading...!</td>
                        </tr> : fatchData.map((elm, i) => {
                            return <tr key={i}>
                                <td>{elm.name}</td>
                                <td>{elm.username}</td>
                                <td>{elm.website}</td>
                                <td>{elm.phone}</td>
                                <td>{elm.email}</td>
                                <td>{elm.address.city}</td>
                                <td>{elm.address.zipcode}</td>
                                <td>{elm.company.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            <hr />

            <div style={{ textAlign: "center",margin:"40px 0" }}>
                <h1>{count}</h1>
                <button style={{padding:"8px 30px",borderRadius:"5px",border:"none",backgroundColor:"navy",color:"white"}} onClick={() => setCount(count + 1)}>Click me</button>
            </div>

            
        </div>
    )
}
