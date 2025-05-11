import React, { useState } from 'react';
import Child from './Child';
import '../../css/Parent.css';

function Parent() {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("");

    const changeUser = (n, s, l, a) => {
        setName(n);
        setSalary(s);
        setLocation(l);
        setAge(a);
    };

    return (
        <div className="parent-container">
            <div className="input-section">
                <h3>Input Section</h3>
                <Child changeUser={changeUser} />
            </div>

            <div className="output-section">
                <h3>Output Section</h3>
                <div>
                    <strong>Name:</strong> {name} <br /><br />
                    <strong>Salary:</strong> {salary} <br /><br />
                    <strong>Location:</strong> {location} <br /><br />
                    <strong>Age:</strong> {age} <br /><br />
                </div>
            </div>
        </div>
    );
}

export default Parent;
