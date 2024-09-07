import { CustomSelector } from "@/components/CustomSelector/CustomSelector";
import { getAllCustomers } from "@/requests/customers/customer";
import { CustomerPageTable } from "@/ui/CustomerPage/CustomerPageTable";

export default async function CustomerPage() {
  const customersList = getAllCustomers();
  return (
    <div className={"w-full mt-10 "}>
      <header className={"flex items-center justify-between"}>
        <h2 className={"text-sky-950 text-xl font-bold font-['Inter']"}>
          Total : {customersList.length} customer/s
        </h2>
        <div>
          <CustomSelector />
        </div>
      </header>
      <main className={"mt-10"}>
        <CustomerPageTable customers={customersList} />
      </main>
    </div>
  );
}
