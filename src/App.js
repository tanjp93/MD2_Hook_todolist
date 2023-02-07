// import logo from './logo.svg';
// import './App.css';
import Control from "./components/Control"
import ListSudent from "./components/ListStudent"
import Form from "./components/Form"
import { useState } from "react";

function App() {
  const [listStudent, setListStudent] = useState([
    { id: "SV001", nameStudent: "Nguyễn Văn A", age: 20, gender: true },
    { id: "SV002", nameStudent: "Nguyễn Thị B", age: 21, gender: false },
    { id: "SV003", nameStudent: "Nguyễn Văn C", age: 22, gender: true },
    { id: "SV004", nameStudent: "Bùi  Văn D", age: 23, gender: true },
    { id: "SV005", nameStudent: "Lê  Thị E", age: 24, gender: false },
  ]);
  const [searchlist,setSearchlist]=useState("")
  const searchData=(input)=>{
    setSearchlist(input);
  }
  //Khai bao state luu tru sortDir va sortBy
  const [sortdir,setSortDir] = useState("");
  const [sortBy,setSortBy] = useState("");
  // Khai bao 1 function de nhan du lieu sortDir va sortBy tu Control
  const handleSort = (sortDir,sortBy)=>{
    setSortDir(sortDir);
    setSortBy(sortBy);
  }
  // khai bao mang du lieu student
  let displayList=[]
  if(searchlist===[]){return displayList=[...listStudent]}
    else {displayList=listStudent.filter(st=>st.nameStudent.toLowerCase().includes(searchlist))}
  //Sap xep du lieu
  if (sortdir=="name") {
    //Sap xep theo ten
    if (sortBy=="asc") {
      //Sap xep ten tang dan
      displayList.sort((a,b)=>(a.nameStudent>b.nameStudent)?1:(a.nameStudent<b.nameStudent)?-1:0);
    }else{
      //Sap xep ten giam dan
      displayList.sort((a,b)=>(a.nameStudent>b.nameStudent)?-1:(a.nameStudent<b.nameStudent)?1:0);
    }
  }else if(sortdir=="age"){
    //sap xep theo tuoi
    if (sortBy=="asc") {
      //Sap xep tuoi tang dan
      displayList.sort((a,b)=>a.age-b.age);
    }else{
      //Sap xep tuoi giam dan
      displayList.sort((a,b)=>b.age-a.age);
    }
  }
    return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control searchData={searchData} handleSort={handleSort}/>
          <ListSudent student={displayList} />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
