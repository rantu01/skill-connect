import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function GlassAndGlazingPage() {
  const data = getNewTradeContent("glass-and-glazing");
  if (!data) throw new Error("Missing trade content: glass-and-glazing");
  return <TradePage data={data} />;
}
