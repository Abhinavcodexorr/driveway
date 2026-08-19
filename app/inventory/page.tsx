import { redirect } from "next/navigation";

// Inventory is disabled — do not open this page.
// import InventoryPage from "@/components/pages/InventoryPage";
// export default function Page() {
//   return <InventoryPage />;
// }

export default function Page() {
  redirect("/");
}
