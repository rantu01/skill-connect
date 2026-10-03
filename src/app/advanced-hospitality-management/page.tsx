import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function AdvancedHospitalityManagementPage() {
  const data = getNewTradeContent("advanced-hospitality-management");
  if (!data) throw new Error("Missing trade content: advanced-hospitality-management");
  return <TradePage data={data} />;
}
