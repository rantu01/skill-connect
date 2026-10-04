import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function HospitalityManagementPage() {
  const data = getNewTradeContent("hospitality-management");
  if (!data) throw new Error("Missing trade content: hospitality-management");
  return <TradePage data={data} />;
}
