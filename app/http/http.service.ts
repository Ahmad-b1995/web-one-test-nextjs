import { AxiosRequestConfig } from "axios";
import { fetchData } from "./axios.config";
import { DataType } from "@/types/data.type";

export async function getData(
  options?: AxiosRequestConfig
): Promise<DataType> {
  return fetchData<DataType>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/Blog/Home/هزینه-رجیستری-گوشی`,
    options
  );
}

