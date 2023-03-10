// import logo from './logo.svg';
// import './App.css';
import Control from "./components/Control"
import ListSudent from "./components/ListStudent"
import Form from "./components/Form"
import { createContext, useState } from "react";

export const studentContext = createContext();
function App() {
  const [listStudent, setListStudent] = useState([
    { id: "SV001", nameStudent: "Nguyễn Văn A", age: "20", gender: true, birthDate: "2022-04-13", birthPlace: "HN", address: "Toa nha Hoa Binh" },
    { id: "SV002", nameStudent: "Nguyễn Thị B", age: "21", gender: false, birthDate: "2022-04-13", birthPlace: "HN", address: "Toa nha Hoa Binh" },
    { id: "SV003", nameStudent: "Nguyễn Văn C", age: "22", gender: true, birthDate: "2022-04-13", birthPlace: "HN", address: "Toa nha Hoa Binh" },
    { id: "SV004", nameStudent: "Bùi  Văn D", age: "23", gender: true, birthDate: "2022-04-13", birthPlace: "HN", address: "Toa nha Hoa Binh" },
    { id: "SV005", nameStudent: "Lê  Thị E", age: "24", gender: false, birthDate: "2022-04-13", birthPlace: "HN", address: "Toa nha Hoa Binh" },
  ]);
  const [searchlist, setSearchlist] = useState("")
  const searchData = (input) => {

    setSearchlist(input);
  }
  let [sortDir, setSortDir] = useState("");
  let [sortBy, setSortBy] = useState("");
  let displayList = []
  const handleSort = (sortDir, sortBy) => {
    setSortDir(sortDir)
    setSortBy(sortBy)
  }

  const [toggle, setToggle] = useState(
    {
      status: false,
      action: ''
    }
  )

  // khai bao mang du lieu student

  if (searchlist === "") { displayList = [...listStudent] }
  else { displayList = listStudent.filter(st => st.nameStudent.toLowerCase().includes(searchlist.toLowerCase())) }


  if (sortDir == "name") {
    if (sortBy == "ASC") {
      displayList.sort((a, b) => (a.nameStudent > b.nameStudent) ? 1 : (a.nameStudent < b.nameStudent) ? -1 : 0)
    } else {
      displayList.sort((a, b) => (a.nameStudent > b.nameStudent) ? -1 : (a.nameStudent < b.nameStudent) ? 1 : 0)
    }
  }
  else if (sortDir == "age") {
    if (sortBy == "ASC") {
      displayList.sort((a, b) => (a.age - b.age))
    } else { displayList.sort((a, b) => (b.age - a.age)) }
  }
  let newStudent = { stdId: "", stdName: "", stdAge: "", stdGender: "", stdBirtDay: "", stdBirtPlace: "", stdAddress: "" }
  /////Them moi
  const recieveData = (studentNew) => {
    //set vao listStudent
    setListStudent([...listStudent, studentNew]);
  }
  const elementToggle = (toggle.status) ? <Form toggle={toggle} recieveData={recieveData} /> : ""
  const [selectedStd, setSelectedStd] = useState('')
  const rcSelectedStd = (std) => {
    console.log(std);
  }
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control toggle={toggle} setToggle={setToggle} handleSort={handleSort} searchData={searchData} />
          <studentContext.Provider value={{rcSelectedStd}}>
            <ListSudent student={displayList} />
          </studentContext.Provider>

        </div>
        {/* <Form recieveData={recieveData(stdId,stdName,stdAge,stdGender,stdBirtDay,stdBirtPlace,stdAddress)} />     */}
        {elementToggle}
      </div>
    </div>
  );
}

export default App;
