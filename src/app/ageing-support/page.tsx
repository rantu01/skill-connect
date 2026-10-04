import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function AgeingSupportPage() {
  const data = getNewTradeContent("ageing-support");
  if (!data) throw new Error("Missing trade content: ageing-support");
  return <TradePage data={data} />;
}
