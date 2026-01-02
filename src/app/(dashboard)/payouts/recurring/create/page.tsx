import { requireAuth } from "@/lib/auth";
import { CreateRecurringPayment } from "./_components/create-recurring-payment";

export const metadata = {
  title: "Recurring Payments | Request Commerce",
  description: "Create recurring payments using Request Commerce",
};
export default async function CreateRecurringPaymentSlot() {
  await requireAuth();

  return <CreateRecurringPayment />;
}
