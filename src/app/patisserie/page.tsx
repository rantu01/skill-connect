import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function PatisseriePage() {
  const data = getNewTradeContent("patisserie");
  if (!data) throw new Error("Missing trade content: patisserie");
  return <TradePage data={data} />;
}
