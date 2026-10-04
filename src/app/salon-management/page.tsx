import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function SalonManagementPage() {
  const data = getNewTradeContent("salon-management");
  if (!data) throw new Error("Missing trade content: salon-management");
  return <TradePage data={data} />;
}
