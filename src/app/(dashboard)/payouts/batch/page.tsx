import { PageDescription, PageTitle } from "@/components/page-elements";
import { requireAuth } from "@/lib/auth";
import { BatchPayout } from "./_components/batch-payout";

export const metadata = {
  title: "Batch Payouts | Request Commerce",
  description: "Send batch payouts using Request Commerce",
};
export default async function BatchPayoutSlot() {
  await requireAuth();

  return (
    <>
      <PageTitle>Batch Payouts</PageTitle>
      <PageDescription>
        Make payouts to multiple recipients of your choice
      </PageDescription>
      <BatchPayout />
    </>
  );
}
