import React, { useState } from 'react'
import Layout from '../Layout';
import Card from '../UI/Card';
import FormInput from '../UI/FormInput/FormInput';

const EditEmployee = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeProgram, setEmployeeProgram] = useState("");
    const [employeeSession, setEmployeeSession] = useState("");

    return (
        <Layout sidebar>
            <div className='w-full m-4'>
                <Card>
                    <FormInput value={employeeName} label="employee name" />
                    <FormInput value={employeeEmail} label="employee email" />
                    <FormInput value={employeeProgram} label="program" />
                    <FormInput value={employeeSession} label="session" />
                </Card>
            </div>
        </Layout>
    )
}

export default EditEmployee;