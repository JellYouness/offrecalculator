import React, { useEffect, useState } from 'react';
import OffreLine from './OffreLine';

const OffreList = (props) => {
    const { estimation, offres, editOffre, deleteOffre, handleClickOpenEdit } = props;

    function sort_by_key(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
    return (
        <>
            {sort_by_key(offres, 'montant').map((data, index) => (
                <OffreLine
                    key={index}
                    estimation={estimation}
                    data={data}
                    editOffre={editOffre}
                    deleteOffre={deleteOffre}
                    handleClickOpenEdit={handleClickOpenEdit}
                />
            ))}
        </>
    );
};

export default OffreList;
