import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function RealEstatePracticePage() {
  const data = getNewTradeContent("real-estate-practice");
  if (!data) throw new Error("Missing trade content: real-estate-practice");
  return <TradePage data={data} />;
}
