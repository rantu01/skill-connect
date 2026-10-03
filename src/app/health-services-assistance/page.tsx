import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function HealthServicesAssistancePage() {
  const data = getNewTradeContent("health-services-assistance");
  if (!data) throw new Error("Missing trade content: health-services-assistance");
  return <TradePage data={data} />;
}
