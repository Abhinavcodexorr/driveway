import { redirect } from "next/navigation";

// Inventory / vehicle detail URLs are disabled.
// import InventoryPage from "@/components/pages/InventoryPage";
// import VehicleDetailsPage from "@/components/pages/VehicleDetailsPage";
// import { isVehicleDetailSlug } from "@/lib/inventoryUrls";
//
// export const dynamic = "force-dynamic";
//
// export default async function InventoryCatchAllPage({
//   params,
// }: {
//   params: Promise<{ slug: string[] }>;
// }) {
//   const { slug } = await params;
//
//   if (isVehicleDetailSlug(slug)) {
//     const vehiclePage = await VehicleDetailsPage({ vehicleParam: slug[0] });
//     if (vehiclePage) return vehiclePage;
//   }
//
//   return <InventoryPage />;
// }

export default function InventoryCatchAllPage() {
  redirect("/");
}
