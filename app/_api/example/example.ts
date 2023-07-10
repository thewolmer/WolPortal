import { Employee } from '@type/Employee';

export const fetchEmployees = async (): Promise<Employee[] | undefined> => {
  const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');

  if (!res.ok) return;

  const data = await res.json();

  return data.data;
};
