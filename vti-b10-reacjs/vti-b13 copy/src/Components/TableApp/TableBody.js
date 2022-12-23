import React from 'react';
import Button from 'react-bootstrap/Button';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

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
                <td>
                    <Link to={`/home/detail/${item.id}`}>{item.username}</Link>
                    
                </td>
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

