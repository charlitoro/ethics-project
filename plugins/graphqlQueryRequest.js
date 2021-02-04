import { useQuery } from "@apollo/react-hooks";

export const executeQuery = (query, variables = {}) => {
    return useQuery(query, {
        variables,
        notifyOnNetworkStatusChange: true
    });
}
