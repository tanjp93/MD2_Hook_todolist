import React from 'react'
import { useState } from 'react';

export default function Control(props) {
  const [inputData,setInputData]= useState("");
  const handleSearch=()=>{
    props.searchData(inputData)
  }
  const handleSort = (e)=>{
    let value = e.target.value;
    // sortDir va sortBy
    let arrSort = value.split('-');
    let sortDir = arrSort[0];
    let sortBy = arrSort[1];
    props.handleSort(sortDir,sortBy);
  }

  return (
    <div>
      <div className="card-header">
  <div className="row">
    <div className="col-3">
      <button type="button" className="btn btn-primary btn-icon-text">
        Thêm mới sinh viên
      </button>
    </div> 
    <div className="col-6">
      <form className="search-form" action="#">
        <i className="icon-search" />
        <input
          type="search"
          className="form-control"
          placeholder="Search Here"
          title="Search here"
          onChange={(e)=>(
            setInputData(e.target.value)
          )}
        />
        <button className="btn btn-primary btn-icon-text" onClick={handleSearch}>Tìm kiếm</button>
      </form>
    </div>
    <div className="col-3 d-flex align-items-center">
      <select className="form-control" onChange={handleSort}>
      <option value="">Sort </option>
        <option value="name-asc">Name Sort A-Z </option>
        <option value="name-desc">Name Sort Z-A</option>
        <option value="age-asc">Age Sort (từ thấp tới cao) </option>
        <option value="age-desc">Age Sort (từ cao tới thấp)</option>
      </select>
    </div>
  </div>
</div>

    </div>
  )
}
