import React from 'react';
import Button from 'react-bootstrap/Button';

export default function TableBody({dataTable, handleEditApp}) {
    // console.log(dataTable);
    const renderData = () => {
        if(!dataTable) {
            return '';
        }

        const handleEdit = (id) => {
            handleEditApp(id);
        }

        return dataTable.map((item) => {
           return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.classNameApp}</td>
                <td>
                    <Button variant="warning" className='mr-5' onClick={()=> handleEdit(item.id)}>
                        Edit
                    </Button>
                    <Button variant="danger">Delete</Button>{" "}
                </td>
            </tr>
           )
        })
    };
    

  return (
    <> 
    <tbody>
        {
            renderData()
        }
    </tbody>
    </>
  )
}

