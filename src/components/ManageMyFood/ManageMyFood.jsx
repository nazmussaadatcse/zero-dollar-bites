import { AuthContext } from "../AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import React from 'react';
import { useTable } from 'react-table';


const ManageMyFood = () => {

    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    console.log(user?.email);
    console.log(foods);
    const data = foods;

    useEffect(() => {
        fetch(`http://localhost:5000/food`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filteredFoods = data.filter(food => food.email === user?.email);
                setFoods(filteredFoods);
            })
    }, [user]);

    const handleDelete = (id) => {
        console.log('handleDelete', id);
        const email = user.email;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/food/${id}?email=${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // console.log('deleted successfully');
                            const remainingFood = foods.filter(food => food._id !== id);
                            setFoods(remainingFood);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Deleted successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            // console.log(foods);
                        }
                    })
            }
        })

    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Item',
                accessor: (row, i) => i + 1,
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Status',
                accessor: 'foodStatus',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Expire on',
                accessor: 'expiry_date',
            },
            {
                Header: 'Update',
                accessor: (row) => (
                    <Link to={`/manage/${row._id}`}>
                        <button className="btn btn-xs mt-6 m-1 btn-outline rounded-md">manage</button>
                    </Link>
                ),
            },
            {
                Header: 'Manage',
                accessor: (row) => (
                    <Link to={`/update/${row._id}`}>
                        <button className="btn btn-xs mt-6 m-1 btn-outline rounded-md">update</button>
                    </Link>
                ),
            },

            {
                Header: 'Delete',
                accessor: (row) => (
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-xs mt-6 m-1 btn-outline rounded-md"
                    >
                        Delete
                    </button>
                ),
            },


        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });


    return (

        <div className="p-8">
            <div className="flex justify-center p-4">
                <h2 className="text-xl font-semibold text-green-700">Manage My Food <hr className="p-1 bg-green-700" /> </h2>
            </div>
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, j) => (
                                <th key={j} {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody

                    {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.original._id}>
                                {row.cells.map((cell, k) => (
                                    <td key={k} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>


    );
};

export default ManageMyFood;