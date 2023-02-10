
import React from 'react'

const Foreach = () => {

    const array = [2, 3, 4, 5, 6, 7, 9, 10]
    let print = []
    array.forEach((el) => {
        print.push(<><p >{el * 2}</p><br /></>);
    })

    return (
        <div>
            <h1>Foreach</h1>

            <h5 style={{ backgroundColor: "#45d9c5", padding: "3px", margin: "auto", width: "100px" }}>
                {print}</h5>



        </div>
    )
}

export default Foreach