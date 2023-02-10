import React, { useContext } from 'react'
import { studentContext } from '../App';

export default function Student(props) {
    let {std}=props;
    let {stt}=props;
    const handleSubmit=(selectedStd)=>{
        stdContext.rcSelectedStd(selectedStd)
    }
    const stdContext = useContext(studentContext)
    
    return (
            <tr>
                <td>{stt}</td>
                <td>{std.id}</td>
                <td>{std.nameStudent}</td>
                <td>{std.age}</td>
                <td>{std.gender?"Nam":"Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" onClick={()=>handleSubmit(std)} className="btn btn-danger btn-icon-text">
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text">
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text">
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
    
    )
}
