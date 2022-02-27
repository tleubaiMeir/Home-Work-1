import React from 'react';
import { Rate } from 'antd'

const RateComponent = ({props}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Рейтинг</p>
            <Rate defaultValue={props}></Rate>
        </div>
    );
};

export default RateComponent;