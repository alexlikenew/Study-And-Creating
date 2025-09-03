import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useBookings() {

    const [searchParams] = useSearchParams();

    // Filter
    const filterValue = searchParams.get('status')
    const filter = !filterValue || filterValue === 'all' ? null : {field: 'status', value: filterValue}

    // SORT
    const sortByRaw = searchParams.get('sortBy') || 'startDate-desc'
    const [field, direction] = sortByRaw.split('-')
    const sortBy = {field, direction}

    const {isPending: isLoading, data: bookings, error} = useQuery({
        queryKey: ['bookings', filter, sortBy],
        queryFn: () => getBookings({filter, sortBy})
    })
    return {isLoading, bookings, error}
}

