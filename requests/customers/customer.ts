import axios from "axios";

interface ICustomer {
  id: number;
  address: string;
  city: string;
  province: string;
  zip: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface ICustomersDetails {
  status: number;
  detail: string;
  customers: ICustomer[];
}

export async function getAllCustomers(): Promise<ICustomer[]> {
  try {
    const response = await axios.get<ICustomersDetails>(
      "https://crm-app-backend-mo7p.onrender.com/api/customers"
    );

    if (response.data.status !== 200) {
      throw new Error(`Ошибка сервера: ${response.data.detail}`);
    }

    return response.data.customers;
  } catch (error) {
    console.error("Ошибка при получении клиентов:", error);
    throw error;
  }
}
