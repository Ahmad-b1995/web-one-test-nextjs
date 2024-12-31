import axios, { AxiosError, AxiosRequestConfig } from "axios";

export async function fetchData<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    const defaultHeaders = {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=59", 
    };

    const response = await axios({
      url,
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers, 
      },
    });

    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 304) {
      console.warn("Data not modified, using cached version.");
      return axiosError.response.data as T;
    } else {
      console.error("Error fetching data:", axiosError.message);
      throw axiosError;
    }
  }
}
