import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function CommercialCookeryPage() {
  const data = getNewTradeContent("commercial-cookery");
  if (!data) throw new Error("Missing trade content: commercial-cookery");
  return <TradePage data={data} />;
}
