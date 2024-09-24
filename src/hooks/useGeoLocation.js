import { useQuery } from "@tanstack/react-query";
import { useLocation } from "../utils/utils";

export function useGeoLocation(params) {
    const {data, isPending, error } = useQuery({
        queryKey: ['geoLocation'],
        queryFn : useLocation
    })

    return {data, isPending, error}
}