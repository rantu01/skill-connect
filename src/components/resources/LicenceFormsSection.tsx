import { OfficialFormsDirectory } from "@/components/resources/OfficialFormsDirectory";
import {
  LICENCE_CATEGORIES,
  LICENCE_FORMS,
  LICENCE_STATES,
  MIGRATION_CATEGORIES,
  MIGRATION_FORMS,
  MIGRATION_STATES,
} from "@/lib/official-forms";

export function LicenceFormsSection() {
  return (
    <>
      <OfficialFormsDirectory
        sectionId="licence-forms"
        eyebrow="State contractor licensing"
        title="State Contractor Licensing"
        description="State licence and registration forms are issued and updated by the regulators themselves, so each card opens the current official version rather than a copy that can go out of date. Every link below was last checked on 7 September 2026."
        forms={LICENCE_FORMS}
        states={LICENCE_STATES}
        categories={LICENCE_CATEGORIES}
        note="Links open on the relevant government or assessing body website. Requirements and forms change — always confirm the current version with the regulator before you apply."
        storageKey="skills-connect:saved-licence-forms"
      />
      <OfficialFormsDirectory
        sectionId="migration-forms"
        eyebrow="Skills assessment"
        title="Skills Assessment"
        description="Skills assessments for migration are lodged with the assessing authority, not a state regulator. Each card opens the current official application portal and evidence guidelines. Every link below was last checked on 7 September 2026."
        forms={MIGRATION_FORMS}
        states={MIGRATION_STATES}
        categories={MIGRATION_CATEGORIES}
        note="Links open on the relevant government or assessing body website. Requirements and forms change — always confirm the current version with the regulator before you apply."
        storageKey="skills-connect:saved-migration-forms"
        tone="secondary"
      />
    </>
  );
}
