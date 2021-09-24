import React from 'react';
import AddProduct from '../components/AddProduct';
import ProductTable from '../components/ProductTable';

const AdminPage = () => {
    return (
        <>
        <div className='bc'>
            <AddProduct/>
        </div>
            <ProductTable />
            </>
    );
};

export default AdminPage;