import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.jsx";
import {getBooking} from "../../services/apiBookings.js";
import {useParams} from "react-router-dom";

function UseBooking(props) {

    const {bookingId} = useParams()

    const {isPending: isLoading, data: booking, error} = useQuery({
        queryKey: ['booking'],
        queryFn: () => getBooking(bookingId), retry: false
    })
    return (
        {isLoading, error, booking}
    );
}

export default UseBooking;