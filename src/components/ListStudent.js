import React from 'react'
import Student from './Student'

export default function ListStudent(props) {
  let {student}=props;
  let {searchStd}=props
  // console.log(searchStd);
  let elementStd=student.map((std,index)=>{
    return <Student key={index} std={std} stt={index+1}/>
  })
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {elementStd}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
