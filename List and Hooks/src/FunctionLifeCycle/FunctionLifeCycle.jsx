import React, { useEffect, useState } from 'react'

export default function FunctionLifeCycle() {
    const [fatchData, setFatchData] = useState([])
    useEffect(() => {
        const FatchData = async () => {
            const response = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
            setFatchData(await response)
            console.log(fatchData);
        }
        FatchData()
    }, [])
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
        </div>
    )
}
