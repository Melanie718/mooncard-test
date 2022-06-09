import { useCallback, useEffect, useState } from "react";
import { getExpenses } from "../api/expenses";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const initExpenses = useCallback(async () => {
    try {
      const newExpenses = await getExpenses();
      setExpenses(newExpenses.data);
    } catch (error) {
      console.error(error);
    }
  }, [])

  useEffect(() => {
    initExpenses()
  }, [])

  return expenses
}

export default useExpenses
