import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentTable from "./components/StudentTable";
import { Student } from "./utils/data";
import { fetchStudents } from "./api/students";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents()
      .then((res) => setStudents(res))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <AddStudent setStudents={setStudents} students={students} />
      <StudentTable students={students} />
    </>
  );
}

export default App;
