import React, { useState } from 'react';

function Child({ changeUser }) {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        changeUser(name, salary, location, age);
        setName("");
        setSalary("");
        setLocation("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Enter Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Child;
