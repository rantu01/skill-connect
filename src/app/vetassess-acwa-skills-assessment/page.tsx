import TradePage from "../trade-page";
import { getNewTradeContent } from "@/lib/trade-data";

export default function VetassessAcwaSkillsAssessmentPage() {
  const data = getNewTradeContent("vetassess-acwa-skills-assessment");
  if (!data) throw new Error("Missing trade content: vetassess-acwa-skills-assessment");
  return <TradePage data={data} />;
}
