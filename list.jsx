import React, { useState } from 'react'
import C1 from './C1'
import C2 from './C2'

function App() {
    const [namelist, setNamelist] = useState(["ram", "raj", "harish"])

    const [simplejson, setSimplejson] = useState({
        "name": "ram",
        "dept": "csbs"
    })

    const updatenames = () => {
        setNamelist([...namelist, "sam"]);
    }

    return (
        <div>
            <C1 content="navbar" />
            <C2 />
            {
                namelist.map((e, i) => <p key={i}>{e}</p>)
            }
            <button onClick={updatenames}>update namelist</button>
        </div>
    )
}

export default App