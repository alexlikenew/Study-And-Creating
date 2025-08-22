import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCabin as deleteCabinApi} from "../../services/apiCabins.jsx";
import toast from "react-hot-toast";

import React from 'react';

function UseDeleteCabin() {
    const queryClient = useQueryClient()

    const {isPending: isDeleting, mutate: deleteCabin} = useMutation({
        mutationFn: (id) => deleteCabinApi(id),
        onSuccess: () => {
            toast.success('cabin succesfully deleted')
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            })

        },
        onError: err => toast.error(err.message)
    })
    return (
        {isDeleting, deleteCabin}
    );
}

export default UseDeleteCabin;

