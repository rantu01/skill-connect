import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function CabinetMakingPage() {
  const data = getNewTradeContent("cabinet-making");
  if (!data) throw new Error("Missing trade content: cabinet-making");
  return <TradePage data={data} />;
}
