import React from 'react'

export default function TableHeader(props) {
    return (
        <>
            <thead>
                    <tr>
                        <th>{props.tableHeader.col1}</th>
                        <th>{props.tableHeader.col2}</th>
                        <th>{props.tableHeader.col3}</th>
                    </tr>
                </thead>
        </>
    )
}
