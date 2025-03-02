import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Roster () {
    const [students, setStudents] = useState<string[]>([]);
    const [inputName, setInputName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputName.trim()) {
            setStudents([...students, inputName]);
            setInputName('');
        }
    }

    return (
        <div style={{width: "400px", marginLeft: "1000px"}}>
            <h1>Students</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)} 
                />
            </form>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <Link to={`/student/${index}`}>{student}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}