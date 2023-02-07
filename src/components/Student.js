import React from 'react'

export default function Student(props) {
    let {std}=props;
    let {stt}=props;
    return (
            <tr>
                <td>{stt}</td>
                <td>{std.id}</td>
                <td>{std.nameStudent}</td>
                <td>{std.age}</td>
                <td>{std.gender?"Nam":"Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text">
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
