import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function BeautyTherapyPage() {
  const data = getNewTradeContent("beauty-therapy");
  if (!data) throw new Error("Missing trade content: beauty-therapy");
  return <TradePage data={data} />;
}
