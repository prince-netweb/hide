import React from 'react'
const Forin = () => {

    var object = {
        firstname: "rohit",
        lastname: "kumar",
        class: 12,
        rollno: 121,

    }
    var print = []
    for (let key in object) {
        print.push(object[key])
    }

    return (
        <div className='forin'>
            <h1>Forin loop</h1>
            {
                print.map((item, idex) => (
                    <div key={idex} style={{ background: "pink", padding: "3px", width: "100px", margin: "auto" }}>
                        <h5>{item}</h5>
                    </div>
                ))
            }

        </div>
    )
}

export default Forin