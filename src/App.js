// import logo from './logo.svg';
// import './App.css';
import Control from "./components/Control"
import ListSudent from "./components/ListStudent"
import Form from "./components/Form"
import { useState } from "react";

function App() {
  const [listStudent, setListStudent] = useState([
    { id: "SV001", nameStudent: "Nguyễn Văn A", age: "20", gender: true },
    { id: "SV002", nameStudent: "Nguyễn Thị B", age: "21", gender: false },
    { id: "SV003", nameStudent: "Nguyễn Văn C", age: "22", gender: true },
    { id: "SV004", nameStudent: "Bùi  Văn D", age: "23", gender: true },
    { id: "SV005", nameStudent: "Lê  Thị E", age: "24", gender: false },
  ]);
  const [searchStd, setsearchStd] = useState("");
  const searchData = (searchDataInput) => {
    //Cap nhat state --> render lai
    setsearchStd(searchDataInput)
  }
  // khai bao mang du lieu student sau khi search
  let studentDisplay = [];
  console.log("searchSTD-->", searchStd);
  if (searchStd == "") {
    studentDisplay = [...listStudent];
  } else {
    // da co du lieu search --> loc du lieu
    studentDisplay = listStudent.filter(st => st.nameStudent.toLowerCase().includes(searchStd));
  }
  console.log(studentDisplay);
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control searchData={searchData} />
          <ListSudent student={studentDisplay} />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
