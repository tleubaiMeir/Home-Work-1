import React from 'react';
import '../style/ListOfStore.css'
import RateComponent from './RateComponent.jsx'

const ListOfStore = (props) => {
    


    return (
        <div className='store'>
            <div>
                <ul>
                    <li><strong>Название:</strong>  {props.store.title}</li>
                    <li><strong>Город:</strong> {props.store.city}</li>
                    <li><strong>Режим работы:</strong>  {props.store.opening} - {props.store.closing} </li>
                    <li><strong>Удаленность:</strong>  {props.store.distance} метров</li>
                </ul>
            </div>
            <div>
                <RateComponent props ={props.store.raiting} />
            </div>
        </div>
    );
};

export default ListOfStore;