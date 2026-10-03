import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function HairdressingPage() {
  const data = getNewTradeContent("hairdressing");
  if (!data) throw new Error("Missing trade content: hairdressing");
  return <TradePage data={data} />;
}
