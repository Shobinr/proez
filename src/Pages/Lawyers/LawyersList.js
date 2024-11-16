// import React from 'react';
// import DataTable from 'react-data-table-component';

// const lawyers = [
//     { 
//         id: 1, 
//         name: 'John Doe', 
//         specialization: 'Criminal Law',
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com',
//         dateOfBirth: '01/01/1980',
//         age: 41,
//         photo: 'path/to/photo.jpg',
//         gender: 'Male',
//         mobile: '+1 123-456-7890',
//         address: '123 Main St, City, Country',
//         country: 'USA',
//         state: 'California',
//         city: 'Los Angeles',
//         zip: '90001'
//     },
//     { 
//         id: 2, 
//         name: 'Jane Smith', 
//         specialization: 'Corporate Law',
//         firstName: 'Jane',
//         lastName: 'Smith',
//         email: 'jane.smith@example.com',
//         dateOfBirth: '02/02/1985',
//         age: 36,
//         photo: 'path/to/photo.jpg',
//         gender: 'Female',
//         mobile: '+1 123-456-7890',
//         address: '456 Another St, City, Country',
//         country: 'USA',
//         state: 'New York',
//         city: 'New York',
//         zip: '10001'
//     },
//     { 
//         id: 3, 
//         name: 'Sam Johnson', 
//         specialization: 'Family Law',
//         firstName: 'Sam',
//         lastName: 'Johnson',
//         email: 'sam.johnson@example.com',
//         dateOfBirth: '03/03/1990',
//         age: 31,
//         photo: 'path/to/photo.jpg',
//         gender: 'Male',
//         mobile: '+1 123-456-7890',
//         address: '789 Another St, City, Country',
//         country: 'USA',
//         state: 'Texas',
//         city: 'Houston',
//         zip: '77001'
//     },
// ];



//     const LawyersList = () => {
//         const columns = [
//             { name: 'Name', selector: row => row.name, sortable: true },
//             { name: 'Specialization', selector: row => row.specialization, sortable: true },
//             { name: 'First Name', selector: row => row.firstName, sortable: true },
//             { name: 'Last Name', selector: row => row.lastName, sortable: true },
//             { name: 'Email', selector: row => row.email, sortable: true },
//             { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
//             { name: 'Age', selector: row => row.age, sortable: true },
//             { name: 'Photo', selector: row => <img src={row.photo} alt="lawyer" width="50" />, sortable: false },
//             { name: 'Gender', selector: row => row.gender, sortable: true },
//             { name: 'Mobile', selector: row => row.mobile, sortable: true },
//             { name: 'Address', selector: row => row.address, sortable: true },
//             { name: 'Country', selector: row => row.country, sortable: true },
//             { name: 'State', selector: row => row.state, sortable: true },
//             { name: 'City', selector: row => row.city, sortable: true },
//             { name: 'Zip', selector: row => row.zip, sortable: true },
//         ];

//         return (
//             <div className="w-full mx-2">
//                 <header className="text-center">
//                     <h2 className='text-2xl'> Lawyers List</h2>
//                 </header>
//                 {/* <DataTable
//                     className='dark:bg-boxdark'
//                     columns={columns}
//                     data={lawyers}
//                     pagination
//                 /> */}
//             </div>
//         );
//     };

// export default LawyersList;


import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

const data =[
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }
]
export default function LawyersList() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    useEffect(() => {
        setProducts(data);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };


    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products}  className="p-datatable p-component" editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '40%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
        