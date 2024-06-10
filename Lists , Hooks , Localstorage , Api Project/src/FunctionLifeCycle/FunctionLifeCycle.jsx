import React, { useEffect, useRef, useState } from 'react'

export default function FunctionLifeCycle() {
    const [fatchData, setFatchData] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
    })
    const [data, setData] = useState([])
    const [updateData, setUpdateData] = useState(null)
    const handleData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // fatchData form localStorage 
    useEffect(() => {
        let myData = JSON.parse(localStorage.getItem("formData")) || []
        setData(myData)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (updateData !== null) {
            // If updateData is not null, it means we are editing an existing entry
            let previousData = [...data];
            previousData[updateData] = formData; // Update specific index with new data
            localStorage.setItem('formData', JSON.stringify(previousData));
            setData(previousData);
            setUpdateData(null);
        } else {
            // If updateData is null, it means we are adding a new entry
            if (formData.name == "" || formData.email == "" || formData.city == "") {
                alert("Please Fill all Input Fields......!")
                return
            }
            const newData = [...data, formData];
            localStorage.setItem('formData', JSON.stringify(newData));
            setData(newData);
        }
        setFormData({
            name: "",
            email: "",
            city: "",
        })
    }

    // delete data 
    const handleDelete = (index) => {
        let allData = data.filter((_, i) => i !== index)
        localStorage.setItem('formData', JSON.stringify(allData))
        setData(allData)
    }

    // editData 
    const handleEdit = (i) => {
        let oldData = [...data][i]
        setFormData({
            name: oldData.name,
            email: oldData.email,
            city: oldData.city,
        })
        setUpdateData(i)
    }

    // usEffect with blank dependencey 
    useEffect(() => {
        const FatchData = async () => {
            const response = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
            setFatchData(await response)
        }
        FatchData()
    }, [])

    return (
        <div style={{ fontFamily: "cursive" }}>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Function componant Life Cycle in React JS</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={formData.name} onChange={handleData} name='name' placeholder='Enter your name' /> <br />
                    <input type="email" value={formData.email} onChange={handleData} name='email' placeholder='Enter your email' /> <br />
                    <input type="city" value={formData.city} onChange={handleData} name='city'
                        placeholder='Enter your city' /> <br />
                    <button type='submit'>{updateData == null ? "Submit" : "Edit Data"}</button>
                </form>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>Local Storage</h1>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>city</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length == 0 ? <tr>
                            <td>No record Found...!</td>
                        </tr> : data.map(({ name, email, city }, i) => {
                            return <tr key={i}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{city}</td>
                                <td><button className='delete' onClick={() => handleDelete(i)}>Delete</button></td>
                                <td><button className='edit' onClick={() => handleEdit(i)}>Edit</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>Fatch API Project</h1>
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
