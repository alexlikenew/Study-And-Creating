import React from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.js";

function useUpdateSetting() {
    const queryClient = useQueryClient()
    const {mutate: updateSetting, isPending: isEditing} = useMutation({
        mutationFn: (updateSettingApi),
        onSuccess: () => {
            toast.success('Settings successfully updated')
            queryClient.invalidateQueries(({queryKey: ['settings']}))
        },
        onError: (err) => toast.error(err.message)
    })

    return (
        {isEditing, updateSetting}
    );
}

export default useUpdateSetting;