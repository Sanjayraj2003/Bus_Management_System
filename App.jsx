import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [callstate, setCallstate] = useState("fail");
    const [studentsdata, setStudentsData] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const data = await axios.get('http://localhost:8080/student/getAllStudent')
            setStudentsData(data.data)
        }
        fetchdata();
    }, [callstate]);

    const [student, setStudent] = useState({
      "bus_id": "",
      "bus_source_location": "",
      "bus_dest_location": "",
      "bus_fare": "",
      "bus_string": "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        })
    }

    const createStudent = async (e) => {
        e.preventDefault();
        const data = await axios.post('http://localhost:8080/student/addStudent', student)
        console.log(data)
        setCallstate(data.data)
    }

    const deleteStudent = async (bus_id) => {
        const data = await axios.delete(`http://localhost:8080/student/remove/${bus_id}`)
        setCallstate(data)
    }

    const updateStudent = async (e) => {
        const data = await axios.put('http://localhost:8080/student/update', student)
        setCallstate(data);
    }

    return (
        <div>
            <form>
                Bus_id<input type="text" name="bus_id" value={student.bus_id} onChange={handleChange} />
                <br />
                Bus_source_location <input type="text" name="bus_source_location" value={student.bus_source_location} onChange={handleChange} />
                <br />
                Bus_dest_location <input type="text" name="bus_dest_location" value={student.bus_dest_location} onChange={handleChange} />
                <br />
                Bus_fare <input type="text" name="bus_fare" value={student.bus_fare} onChange={handleChange} />
                <br />
                Bus_date <input type="text" name="bus_string" value={student.bus_string} onChange={handleChange} />
                <br />
                <button onClick={createStudent}>create user</button>
                <button onClick={updateStudent}>update user</button>
            </form>
            {studentsdata.map(std => <div className='container'>
               <table border={"1px"}>
  <tr>
    <td>{std.bus_id}</td>
    <td>{std.bus_source_location}</td>
    <td>{std.bus_dest_location}</td>
    <td>{std.bus_fare}</td>
    <td>{std.bus_date}</td>
  </tr>
 
</table>
                <button className='btn' onClick={e => deleteStudent(std.bus_id)}>delete</button>
            </div>)}

        </div>
    )
}
export default App