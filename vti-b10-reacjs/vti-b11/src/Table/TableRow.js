import React from "react";

export default function TableRow(props) {
    return(
        <>
            {props.dataArray.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.age}</td>
                </tr>
            ))}
        </>
    )
}
