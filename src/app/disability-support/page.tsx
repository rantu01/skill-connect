import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function DisabilitySupportPage() {
  const data = getNewTradeContent("disability-support");
  if (!data) throw new Error("Missing trade content: disability-support");
  return <TradePage data={data} />;
}
