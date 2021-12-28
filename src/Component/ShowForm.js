import React from 'react'

const ShowForm = ({data,toggle}) => {
    return (
            <div className="showData">
                <h2>EMPLOYEE FEEDBACK DATA</h2>
                <div className="infoDisplay">
                {
                    data.map((curElement)=>{
                        return(
                            <div className="row">
                                <p>Name: {curElement.name} | Department : {curElement.dept} | Rating : {curElement.rating}</p>
                            </div>
                        )
                    })
                }
                </div>
                <button onClick={()=>toggle(true)} className="backBtn">Go Back</button>
            </div>
    )
}

export default ShowForm
