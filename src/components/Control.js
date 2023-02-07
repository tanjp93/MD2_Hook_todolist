import React from 'react'
import { useState } from 'react';

export default function Control(props) {
  const [inputData,setInputData]= useState("");
  const handleSearch=(e)=>{
    props.searchData(inputData)
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
          placeholder="Search Name Student"
          title="Search here"
          onChange={(e)=>setInputData(e.target.value)}
        />
        <button className="btn btn-primary btn-icon-text" onClick={handleSearch}>Tìm kiếm</button>
      </form>
    </div>
    <div className="col-3 d-flex align-items-center">
      <select className="form-control">
        <option value="">Sắp xếp</option>
        <option value="">ABC def</option>
        <option value="">ABC def</option>
        <option value="">ABC def</option>
      </select>
    </div>
  </div>
</div>

    </div>
  )
}
