import { redirect } from "next/navigation";

// Complete verification thank-you page is disabled.
// import ThankYouCompleteVerificationPage from "@/components/pages/ThankYouCompleteVerificationPage";
//
// export default function Page() {
//   return <ThankYouCompleteVerificationPage />;
// }

export default function Page() {
  redirect("/");
}
