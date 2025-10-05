import React, { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        // defensively trim simple fields if they exist
        const cleaned = {
            ...student,
            name: student?.name?.trim() ?? "",
            age: student?.age ?? "",
            major: student?.major?.trim() ?? "",
        };
        setStudents((prev) => [...prev, cleaned]);
    };

    return (
        <div className="App">
            <h1>Student Information System</h1>

            <h5 style={{ color: "purple", marginTop: 8 }}>
                Developed By: <strong>101491591</strong> | <strong>Parsa Mollahoseini</strong> | DevOps
            </h5>

            <StudentForm addStudent={addStudent} />
            <StudentList students={students} />
        </div>
    );
};

export default App;
