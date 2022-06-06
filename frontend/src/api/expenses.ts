import { AxiosResponse } from "axios";
import apiClient from "../constants/api-client";

export const getExpenses = () => apiClient.get<AxiosResponse<Expense[]>, AxiosResponse<Expense[]>>('/expenses.json')
