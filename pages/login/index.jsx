import React from 'react';
import Content from './content';
import Auth from '../../layouts/Auth';

const index = (props) => {
    return (
        <Auth>
            <Content />
        </Auth>
    )
}

export default index;