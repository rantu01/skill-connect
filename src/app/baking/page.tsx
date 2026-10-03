import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function BakingPage() {
  const data = getNewTradeContent("baking");
  if (!data) throw new Error("Missing trade content: baking");
  return <TradePage data={data} />;
}
