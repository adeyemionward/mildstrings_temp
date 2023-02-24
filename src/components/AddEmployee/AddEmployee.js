import React, { useState } from 'react';
import Layout from '../Layout';
import Button from '../UI/Button/Button';
import Card from '../UI/Card';
import FormInput from '../UI/FormInput/FormInput';
import { MdDelete } from "react-icons/md";
import Select from '../UI/Select/Select';

const AddEmployee = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeProgram, setEmployeeProgram] = useState("");
    const [employeeSession, setEmployeeSession] = useState("");
    const [employees, setEmployees] = useState([]);

    const handleOnclick = () => {
        let emData = {
            _id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
            employeeName,
            employeeEmail,
            employeeProgram,
            employeeSession
        }
        if (employeeEmail && employeeName) {
            setEmployees((prevEmployee) => {
                return [
                    ...prevEmployee,
                    emData
                ]
            });
        } else {
            alert('name and email cannot be empty')
        }
        setEmployeeName('');
        setEmployeeEmail('');
        setEmployeeProgram('');
        setEmployeeSession('');
    }

    const handleSendEmail = () => {

    }

    // const handleDelete = ({ employeeId }) => {
    //     const newEmployee = employees.filter((employee) => employee.employeeName !== employee.employeeName);
    //     setEmployees([newEmployee]);
    // }

    //console.log(employees)
    return (
        <Layout sidebar>
            <div className='w-full m-4'>
                <Card>
                    <div className='md:flex items-center w-full'>
                        <div className='w-full md:w-[30%]'>
                            <FormInput
                                name="Employee name"
                                type="text"
                                value={employeeName}
                                placeholder="employee name"
                                label="employee name"
                                onChange={(e) => setEmployeeName(e.target.value)}
                            />
                        </div>
                        <div className='w-full md:w-[30%]'>
                            <FormInput
                                name="Employee email"
                                type="email"
                                value={employeeEmail}
                                placeholder="employee emial"
                                label="employee email"
                                onChange={(e) => setEmployeeEmail(e.target.value)}
                            />
                        </div>
                        <div className='w-full md:w-[10%]'>
                            <FormInput
                                name="Session"
                                type="number"
                                value={employeeSession}
                                placeholder="nos"
                                label="session"
                                onChange={(e) => setEmployeeSession(e.target.value)}
                            />
                            {/* <FormInput
                                name="Program"
                                type="number"
                                value={employeeProgram}
                                placeholder="nos"
                                label="program"
                                
                            /> */}
                        </div>
                        <div className='w-full md:w-[10%]'>
                            <Select onChange={(e) => setEmployeeProgram(e.target.value)}/>
                        </div>
                        <div className='m-4 md:w-[20%]'>
                            <Button
                                class='w-full text-white bg-[#5F7F41] mr-6 rounded border-none py-3 px-5'
                                text="Add Employee"
                                handleOnclick={handleOnclick}
                            />
                        </div>
                    </div>
                </Card>
                <div className='mt-4'>
                    <Card>
                        {
                            employees && employees.map((employee) => {
                                return (
                                    <div className='mb-2' key={employee._id}>
                                        <div className='w-full flex justify-between items-center m-4'>
                                            <div className='w-[35%]'>
                                                <span className=''>{employee.employeeName}</span>
                                            </div>
                                            <div className='w-[35%]'>
                                                <span className=''>{employee.employeeEmail}</span>
                                            </div>
                                            <div className='w-[5%]'>
                                                <span className=''>{employee.employeeProgram}</span>
                                            </div>
                                            <div className='w-[5%]'>
                                                <span className=''>{employee.employeeSession}</span>
                                            </div>
                                            <div className='mr-6'>
                                                <MdDelete
                                                    className='w-9 h-9 text-red-500 cursor-pointer'
                                                    onClick={() => handleDelete(employee._id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            employees.length > 0 ?
                                <div className='m-4'>
                                    <Button
                                        class='w-full text-white bg-[#5F7F41] shadow rounded border-none py-3'
                                        text="Generate token"
                                        handleOnclick={handleSendEmail}
                                    />
                                </div> : ""
                        }
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <div className='md:flex items-center w-full m-4'>
                            <div className='w-full md:w-[25%]'>
                                <span className=''>Jimoh Adelaja</span>
                            </div>
                            <div className='w-full md:w-[25%]'>
                                <span className=''>jimohadelaja@litcleaner.com</span>
                            </div>
                            <div className='w-full md:w-[35%]'>
                                <span className=''>
                                    RFDHCJIjsdfj23jSDJE43fgjfg476WSDKFMFV
                                </span>
                            </div>
                            <div className='w-full md:w-[15%]'>
                                <Button
                                    class='text-white bg-[#5F7F41] rounded border-none py-2 px-3'
                                    text="Send email"
                                    handleOnclick={handleSendEmail}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

export default AddEmployee;