import { config } from "config";
import useApiClient from "hooks/useApiClient";

import { useQuery } from "react-query";
import { IConversionsSummary } from "types";
import { makeQueryString } from "utils/api";

const useConversionSummary = ({ keys }: { keys: string[] }) => {
  const apiClient = useApiClient();
  return useQuery<IConversionsSummary>(
    {
      queryKey: ["conversions-summary", keys.join(",")],
      queryFn: () => {
        return apiClient(
          `${config.apiUrl}/status/${makeQueryString({ keys })}`
        );
      },
      refetchInterval: 1000 * 5,
      enabled: !keys || !keys.length
    },
  );
};

export { useConversionSummary };
