import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export { generateMetadata } from "@/components/pages/ServiceDetailPage";

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ServiceDetailPage params={params} />;
}
