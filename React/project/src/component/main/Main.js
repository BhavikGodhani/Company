import React, { useState, useEffect,useCallback } from 'react';
import "./main.css";
import { Link } from 'react-router-dom';

const Main = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [selectedIndices, setSelectedIndices] = useState([]);

    //Dom load add in mount and back tyare use
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    // Handle filter and selected items
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    const isSelectAllChecked = filteredItems.length > 0 && filteredItems.every((val, idx) => selectedIndices.includes(idx));

    const handleClick = () => {
        setEditModal(false);
        setEditIndex(null);
        setShowModal(true);
    };

    const handleSave = () => {
        if (name) {
            const finalDescription = description || "-";

            const nameExists = items.some(item => item.name.toLowerCase() === name.toLowerCase());
            if (editModal) {
                if (nameExists && items[editIndex].name.toLowerCase() !== name.toLowerCase()) {
                    alert("already exists");
                    return;
                }
                setItems(items.map((item, idx) =>
                    idx === editIndex ? { name, description: finalDescription } : item
                ));
            } else {
                if (nameExists) {
                    alert("already exists");
                return;
                }
                setItems([...items, { name, description: finalDescription }]);
            }
            setName("");
            setDescription("");
            setShowModal(false);
        }
    };

    const handleCancel = () => {
        setName("");
        setDescription("");
        setShowModal(false);
    };

    const handleEdit = useCallback((idx) => () => {
        setEditModal(true);
        setEditIndex(idx);
        setName(items[idx].name);
        setDescription(items[idx].description);
        setShowModal(true);
    }, [items]);

    const handleDelete = useCallback((idx) => () => {
        // console.log(idx);
        setItems(items.filter((v, i) => i !== idx));
    }, [items]);

    const handleFilterValue = (e) => {
        setFilterValue(e.target.value);
    };

    const handleSelectAll = (e) => {
        setSelectedIndices(e.target.checked ? filteredItems.map((val, idx) => idx) : []);
    };

    const handleRowSelect = (idx) => (e) => {
        setSelectedIndices(prev => 
            e.target.checked
                ? [...prev, idx]
                : prev.filter(selectedIdx => selectedIdx !== idx)
        );
    };

    const handleAllDelete = () => {
        if (selectedIndices.length === 0) return;
        setItems(items.filter((v, idx) => !selectedIndices.includes(idx)));
        setSelectedIndices([]);
    };

    return (
        <div className='mainContainer'>
            <div className="name">
                <h1>Categories</h1>
            </div>

            <div className="Main">
                <input 
                    type='text' 
                    placeholder='Search' 
                    value={filterValue} 
                    onChange={handleFilterValue} 
                />
                <button onClick={handleClick}>Create New Category</button>
            </div>

            <div className="allDelete">
                <button id='btn' onClick={handleAllDelete}>All Delete</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th id='checkbox'> 
                            <input 
                                type='checkbox' 
                                checked={isSelectAllChecked}
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th id='name'>Name</th>
                        <th id='heading-description'>Description</th>
                        <th id='action'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((val, idx) => (
                        <tr key={idx}>
                            <td id='checkbox'>
                                <input 
                                    type="checkbox"
                                    checked={selectedIndices.includes(idx)}
                                    onChange={handleRowSelect(idx)}
                                />
                            </td>
                            <td>
                                <Link to={`/category/${val.name}`} className="category-link">
                                    {val.name}
                                </Link>
                            </td>
                            <td>{val.description}</td>
                            <td>
                                <input 
                                    type='button' 
                                    value="Edit" 
                                    onClick={handleEdit(idx)} 
                                />
                            </td>
                            <td>
                                <input 
                                    type='button' 
                                    value="Delete" 
                                    onClick={handleDelete(idx)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{editModal ? 'Update Name & Description' : 'Create New Category'}</h2>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSave}>{editModal ? "Update" : "Save"}</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
