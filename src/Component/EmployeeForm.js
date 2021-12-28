import React, {useState} from 'react'
import ShowForm from './ShowForm';
import './Style.css'

const EmployeeForm = () => {


    const [showForm, setShowForm] = useState(true);

    const [userDetails, setUserDetails] = useState({
        name:"",
        dept:"",
        rating:"",
    })

    const [record, setRecord] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setUserDetails({...userDetails,[name]: value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const storeRecord = { ...userDetails, id:new Date().getTime().toString()}
        console.log(record);
        setRecord([...record, storeRecord]);
        console.log(record);
        setUserDetails({name:"", dept:"", rating:""});
        setShowForm(false);

    }

    const handleShowForm =(data)=>{
        console.log(data);
        setShowForm(data);
    }


    let fillForm;
    fillForm = <div className="employeeForm">
                <div className="title">EMPLOYEE FEEDBACK FORM</div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' className='labeling'>Name:</label>
                        <input type="text" name='name' id='name' className='curvedBorder'
                        value={userDetails.name} onChange={handleInput}/>

                    </div>
                    <div>
                        <label htmlFor='dept' className='labeling'>Department:</label>
                        <input type="text" name='dept' id='dept' className='curvedBorder'
                        value={userDetails.dept} onChange={handleInput}/>
                    </div>
                    <div>
                        <label htmlFor='rating' className='labeling'>Rating:</label>
                        <input type="number" name='rating' id='rating' className='curvedBorder'
                        value={userDetails.rating} onChange={handleInput}/>
                    </div>
                    <button type='submit' className='submitBtn'>Submit</button> 
                </form>
            </div>

            return(
                <div>
                    {showForm ? fillForm : <ShowForm data={record} toggle={handleShowForm}/>}
                </div>
            )
}

export default EmployeeForm
