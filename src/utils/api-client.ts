const apiClient = (
  url: string,
  {
    method,
    data,
    headers: customHeaders,
    noJsonInResponse,
    ...customConfig
  }: any = {}
): Promise<any> => {
  const config = {
    method: method ?? "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders
    },
    ...customConfig
  };

  return window.fetch(url, config).then(async (response) => {
    if (noJsonInResponse) {
      if (response.ok) {
        return { ok: true };
      } else {
        return Promise.reject("error " + response.status);
      }
    }
    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    } else {
      return Promise.reject({ ...responseData, requestUrl: url });
    }
  });
};

export default apiClient;
