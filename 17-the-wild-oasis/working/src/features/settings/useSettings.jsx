import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";

function UseSettings() {
    const {isPending, error, data: settings} = useQuery({queryKey: ['settings'], queryFn: getSettings})
    return (
        {isPending, error, settings}
    );
}

export default UseSettings;