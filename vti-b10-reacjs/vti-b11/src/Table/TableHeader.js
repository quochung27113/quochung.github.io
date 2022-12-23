import React from "react";

export default function TableHeader(props) {

    const {TableHeader} = props;
    return(
        <>
            <thead>
                <tr>
                    <th>{TableHeader.col3}</th>
                    <th>{TableHeader.col1}</th>
                    <th>{TableHeader.col2}</th>
                </tr>
            </thead>
        </>
    )
}