import React from 'react';
import DataTable from 'react-data-table-component';

const lawyers = [
    { 
        id: 1, 
        name: 'John Doe', 
        specialization: 'Criminal Law',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        dateOfBirth: '01/01/1980',
        age: 41,
        photo: 'path/to/photo.jpg',
        gender: 'Male',
        mobile: '+1 123-456-7890',
        address: '123 Main St, City, Country',
        country: 'USA',
        state: 'California',
        city: 'Los Angeles',
        zip: '90001'
    },
    { 
        id: 2, 
        name: 'Jane Smith', 
        specialization: 'Corporate Law',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        dateOfBirth: '02/02/1985',
        age: 36,
        photo: 'path/to/photo.jpg',
        gender: 'Female',
        mobile: '+1 123-456-7890',
        address: '456 Another St, City, Country',
        country: 'USA',
        state: 'New York',
        city: 'New York',
        zip: '10001'
    },
    { 
        id: 3, 
        name: 'Sam Johnson', 
        specialization: 'Family Law',
        firstName: 'Sam',
        lastName: 'Johnson',
        email: 'sam.johnson@example.com',
        dateOfBirth: '03/03/1990',
        age: 31,
        photo: 'path/to/photo.jpg',
        gender: 'Male',
        mobile: '+1 123-456-7890',
        address: '789 Another St, City, Country',
        country: 'USA',
        state: 'Texas',
        city: 'Houston',
        zip: '77001'
    },
];



    const CasesList = () => {
        const columns = [
            { name: 'Name', selector: row => row.name, sortable: true },
            { name: 'Specialization', selector: row => row.specialization, sortable: true },
            { name: 'First Name', selector: row => row.firstName, sortable: true },
            { name: 'Last Name', selector: row => row.lastName, sortable: true },
            { name: 'Email', selector: row => row.email, sortable: true },
            { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
            { name: 'Age', selector: row => row.age, sortable: true },
            { name: 'Photo', selector: row => <img src={row.photo} alt="lawyer" width="50" />, sortable: false },
            { name: 'Gender', selector: row => row.gender, sortable: true },
            { name: 'Mobile', selector: row => row.mobile, sortable: true },
            { name: 'Address', selector: row => row.address, sortable: true },
            { name: 'Country', selector: row => row.country, sortable: true },
            { name: 'State', selector: row => row.state, sortable: true },
            { name: 'City', selector: row => row.city, sortable: true },
            { name: 'Zip', selector: row => row.zip, sortable: true },
        ];

        return (
            <div className="w-full mx-2">
                <header className="text-center">
                    <h2 className='text-2xl'> All Cases</h2>
                </header>
                <DataTable
                    columns={columns}
                    data={lawyers}
                    pagination
                />
            </div>
        );
    };

export default CasesList;