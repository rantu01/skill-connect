import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function PropertyAgencyManagementPage() {
  const data = getNewTradeContent("property-agency-management");
  if (!data) throw new Error("Missing trade content: property-agency-management");
  return <TradePage data={data} />;
}
