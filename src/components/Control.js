import React from 'react'
import { useState } from 'react';

export default function Control(props) {
  const [inputData, setInputData] = useState("");
  const handleSearch = (e) => {
    e.preventDefault()
    props.searchData(inputData)
  }
  const handleSortData = (e) => {
    let sortValue = e.target.value
    let sort = sortValue.split("-");
    let sortDir = sort[0];
    let sortBy = sort[1];
    props.handleSort(sortDir, sortBy)
  }
  const handleToggle = () => props.setToggle(
    {
      status: !props.toggle.status,
      action: 'Add'
    }
  )

  return (
    <div>
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button type="button"
              className="btn btn-primary btn-icon-text"
              onClick={() => handleToggle()}
            >
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
                onChange={(e) => (
                  setInputData(e.target.value)
                )}
              />
              <button className="btn btn-primary btn-icon-text" onClick={handleSearch}>Tìm kiếm</button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={handleSortData}>
              <option value="">Sort </option>
              <option value="name-ASC">Name Sort A-Z </option>
              <option value="name-DESC">Name Sort Z-A</option>
              <option value="age-ASC">Age Sort (từ thấp tới cao) </option>
              <option value="age-DESC">Age Sort (từ cao tới thấp)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
