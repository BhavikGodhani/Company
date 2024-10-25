import React, { useState } from 'react'
import "./style.css"

function Inputvalue() {
    const [firstName, setfirstname] = useState("");
    const [lastName, setlastname] = useState("");
    const [items, setitems] = useState([])
    const [editMode, seteditmode] = useState(false);
    const [editIndex, seteditindex] = useState(-1);

    const nameChange = (e) => {
        if (e.target.id == "firstName") {
            setfirstname(e.target.value);
        }
        else if (e.target.id == "lastName") {
            setlastname(e.target.value);
        }
    }
    const addTask = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            alert("Please add data");
            setfirstname("")
            setlastname("");
            return;
        }

        const duplicate = items.some((item) => item.firstName === firstName && item.lastName === lastName);
        if (duplicate) {
            alert("Already Exists");
            setfirstname("");
            setlastname("");
            return;
        }

        const newItem = {
            firstName: firstName,
            lastName: lastName
        };

        setitems([...items, newItem]);
        setfirstname("");
        setlastname("");
    }

    const deleteButton = (index) => {
        const deleteItem = items.filter((item, idx) => idx !== index);
        setitems(deleteItem)
    }

    const editButton = (index) => {
        const editValue = items[index];
        setfirstname(editValue.firstName)
        setlastname(editValue.lastName)
        seteditmode(true)
        seteditindex(index)

    }

    const updateButton = () => {

        if (firstName.trim() === "" || lastName.trim() === "") {
            alert("Please add data");
            setfirstname("");
            setlastname("");
            return;
        }         
        const duplicate = items.some((item) => item.firstName == firstName && item.lastName == lastName);
        if(duplicate){
            alert("Duplicate value not valid");
            return;
        }

        const updatedItems = items.map((item, index) => {
            if (index === editIndex) {
                return {
                    firstName: firstName,
                    lastName: lastName
                };
            }
            return item;
        });
    

        setitems(updatedItems);
        setfirstname("");
        setlastname("");
        seteditmode(false);
        seteditindex(-1);
    }

    return (
        <div className='container'>
            <input type='text' id='firstName' placeholder='First Name' value={firstName} onChange={nameChange} />
            <input type='text' id='lastName' placeholder='Last Name' value={lastName} onChange={nameChange} />
            {editMode ? (
                <button onClick={updateButton}>Update</button>
            ) : (
                <button id='Btn' onClick={addTask}>Add</button>
            )}
            
        </div>
    );
}

export default Inputvalue

