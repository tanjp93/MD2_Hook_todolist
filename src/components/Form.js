import React from 'react'
import { useState } from 'react'

export default function Form(props) {
  const [stdId, setStdId] = useState("");
  const [stdName, setStdName] = useState("");
  const [stdAge, setStdAge] = useState("");
  const [stdGender, setStdGender] = useState("");
  const [stdBirtDay, setStdBirtDay] = useState("");
  const [stdBirtPlace, setStdBirtPlace] = useState("");
  const [stdAddress, setStdAddress] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    let studentNew = {id:stdId, nameStudent:stdName, age:stdAge, gender:stdGender, birthDate:stdBirtDay, birthPlace:stdBirtPlace, address:stdAddress};
    props.recieveData(studentNew)
  }


  return (
    <div className="col-8 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" onChange={(e) => {
                  setStdId(e.target.value)
                }} className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" onChange={(e) => {
                  setStdName(e.target.value)
                }} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" onChange={(e) => {
                  setStdAge(e.target.value)
                }} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" onChange={(e) => {
                  setStdGender(e.target.value)
                }}>
                  <option value={""}></option>
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" onChange={(e) => {
                  setStdBirtDay(e.target.value)
                }} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" >Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" onChange={(e) => {
                  setStdBirtPlace(e.target.value)
                }}>
                  <option value={""}></option>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                  <option value={"TH"}>Thanh Hóa</option>
                  <option value={"NA"}>Nghệ An</option>
                  <option value={"DL"}>Đắc Lắc</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} onChange={(e) => {
                  setStdAddress(e.target.value)
                }} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>


  )
}
