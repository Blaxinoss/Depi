import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMemo } from "react";
import { Student } from "../utils/data";

interface Props {
  students: Student[];
}

function StudentTable({ students }: Props) {
  // useEffect(() => {
  //   if (students.length >= 5) {
  //     alert("Maximum number of students reached!");
  //   }
  // }, [students]);

  const studentsWithScholarship = useMemo(() => {
    return students.map((item) => {
      let result = false;
      for (let i = 0; i <= 1000; i++) {
        result = Math.random() > 0.5;
      }
      console.log(result);
      return { ...item, scholarship: result };
    });
  }, [students]);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((item, i) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.class}</TableCell>
                <TableCell>
                  {studentsWithScholarship[i]?.scholarship ? "yes" : "no"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentTable;
