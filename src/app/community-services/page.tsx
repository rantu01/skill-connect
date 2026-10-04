import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function CommunityServicesPage() {
  const data = getNewTradeContent("community-services");
  if (!data) throw new Error("Missing trade content: community-services");
  return <TradePage data={data} />;
}
