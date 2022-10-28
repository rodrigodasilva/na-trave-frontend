import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useRef, useState } from "react";

interface State<T> {
  data?: T;
  loading: boolean;
  error?: AxiosError;
}

function useFetch<T = unknown>(
  url?: string,
  options?: AxiosRequestConfig
): State<T> {
  const cancelRequest = useRef<boolean>(false);

  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (!url) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url, options);

        if (cancelRequest.current) return;

        setData(response.data as T);
      } catch (error) {
        if (cancelRequest.current) return;
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
