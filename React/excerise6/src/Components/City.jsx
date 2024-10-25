import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function City() {
    const [cityName, setCityName] = useState('');
    const navigate = useNavigate();

    const handleSearchOnClick = (e) => {
        if (cityName.trim() === '') {
            alert('Please enter city name');
            return;
        }
        e.preventDefault();
        navigate('/details', { state: { cityName: cityName } });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ marginBottom: '20px' }}>Weather App</h1>
            <input
                type="text"   onChange={(e) => setCityName(e.target.value)}  value={cityName}  placeholder="Enter the name of city" style={{ padding: '10px', marginRight: '10px' }}/>
            <button
                onClick={handleSearchOnClick} type="submit" 
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'green',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}>
                Search
            </button>
        </div>
    );
}

export default City;
