import React from 'react';
import '../../style/FormComponent.css'
import { Input } from 'antd';

const MyInput = (props) => {
    return (
        <Input {...props}
        style={{padding: '10px',marginBottom: '20px'}}
        />
    );
};

export default MyInput;