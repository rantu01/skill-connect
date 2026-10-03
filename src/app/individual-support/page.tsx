import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function IndividualSupportPage() {
  const data = getNewTradeContent("individual-support");
  if (!data) throw new Error("Missing trade content: individual-support");
  return <TradePage data={data} />;
}
