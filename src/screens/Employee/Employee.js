import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import datas from '../../data';
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Employee = () => {
  const [employeeDatas, setEmployeeDatas] = useState(datas);
  // Get the userId param from the URL.
  let { employeeId } = useParams();
  console.log(employeeId)
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'employee',
      headerName: 'Employee name',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'session',
      headerName: 'Sessions',
      width: 150,
      editable: true,
    },
    {
      field: 'program',
      headerName: 'Programs',
      width: 150,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/edit/employee/" + params.row.id}>
              <button className='text-white bg-[#5F7F41] mr-6 rounded border-none py-1 px-2'>Edit</button>
            </Link>
            <MdDelete className='w-8 h-8 text-red-500 cursor-pointer' onClick={() => handleDelete(employeeId)} />
          </>
        )
      },
    },
  ];

  const handleDelete = () => {
    const newEmployeeDatas = datas.filter((data) => data.id !== employeeId);
    setEmployeeDatas(newEmployeeDatas)
  }

  return (
    <Layout sidebar>
      <div className='w-full m-4'>
        <div className='flex justify-between items-center mb-4'>
          <div className='text-2xl font-semibold text-[#0f172a]'>Employee</div>
          <div>
            <Link
              to={"/add/employee"}
              className='bg-[#5F7F41] text-white rounded-md shadow hover:bg-[#73C63C] border-none py-3 px-5 transition duration-500 ease-in-out'
            >
              Add employee
            </Link>
          </div>
        </div>
        <Card>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={employeeDatas}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Employee;