import React from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

function UseEditCabin() {
    const {mutate: editCabin, isPending: isEditing} = useMutation({
        mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success('New cabin succesfully created')
            useQueryClient.invalidateQueries(({queryKey: ['cabins']}))
        },
        onError: (err) => toast.error(err.message)
    })

    return (
        {isEditing, editCabin}
    );
}

export default UseEditCabin;