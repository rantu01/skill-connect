import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function KitchenManagementPage() {
  const data = getNewTradeContent("kitchen-management");
  if (!data) throw new Error("Missing trade content: kitchen-management");
  return <TradePage data={data} />;
}
