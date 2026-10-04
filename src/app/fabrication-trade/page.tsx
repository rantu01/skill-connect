import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function FabricationTradePage() {
  const data = getNewTradeContent("fabrication-trade");
  if (!data) throw new Error("Missing trade content: fabrication-trade");
  return <TradePage data={data} />;
}
