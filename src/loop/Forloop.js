import React, { useEffect, useState } from 'react'

const Forloop = () => {


    let array = ["Rohit", "Roshan", "Anil", "Aman", "Adarsh"]
    let html = [];

    for (let i = 0; i < array.length; i++) {


        html.push(<><p >Name : {array[i]}</p><br /></>);
    }


    return (
        <div>
            <h1>Forloop</h1>
            <div>
                {html}
            </div>
            { }



        </div>
    )
}

export default Forloop