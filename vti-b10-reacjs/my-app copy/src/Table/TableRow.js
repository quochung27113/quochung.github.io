import React from 'react'

export default function TableRow(props) {
    
    return (
        <>
        {
            props.dataArr.map((item, id) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.age}</td>
            </tr>
            ))
        }
            

        </>
    )
}
