import { Student } from "../utils/data";

const BASE_URL = "http://localhost:3000/students";

export const fetchStudents = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createStudent = async (studentData: Student) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
