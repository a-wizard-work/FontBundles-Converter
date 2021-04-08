import { useCallback } from "react";
import apiClient from "utils/api-client";

const useApiClient = () => {
  return useCallback(
    (endpoint, config?) => apiClient(endpoint, { ...config }),
    []
  );
};

export default useApiClient;
