import React, { useState } from 'react'

const Forof = () => {




    let even = []
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let num of numbers) {
        if (num % 2 === 1) {
            continue;
        }
        even.push({
            even: num, odd: numbers[num]
        })
    }
    return (
        <div>
            <h1>For of</h1>

            {
                even.map((item, idex) => (
                    <>
                        <h5>
                            Even number
                        </h5>
                        <h6 key={idex} style={{ backgroundColor: "#5d86c9", padding: "3px", margin: "auto", width: "100px" }}>
                            {item.even}
                        </h6>
                        <h5>Odd number</h5>
                        <h6 style={{ backgroundColor: "#5d86c9", margin: "auto", width: "100px" }}>{item.odd}</h6>
                    </>


                ))
            }




        </div >
    )
}

export default Forof;