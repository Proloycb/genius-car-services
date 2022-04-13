import React from 'react';
import notfound from '../../../images/banner/notfound.jpg';

const NotFound = () => {
    return (
        <div className='mx-auto w-50'>
            <h2 className='text-primary text-center'>Page Not Found</h2>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;