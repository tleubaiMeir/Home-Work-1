import React from 'react';
import ListOfStore from './ListOfStore';

const StoreItem = ({ stores,value }) => {
    return (
        <div>
            {stores.map(store => <ListOfStore stores={stores} value={value} store={store} key={store.id} />)}

        </div>
    );
};

export default StoreItem;