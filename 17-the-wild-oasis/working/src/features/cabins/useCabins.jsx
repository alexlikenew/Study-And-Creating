import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.jsx";

function UseCabins(props) {
    const {isPending: isLoading, data: cabins, error} = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins
    })
    return (
        {isLoading, error, cabins}
    );
}

export default UseCabins;