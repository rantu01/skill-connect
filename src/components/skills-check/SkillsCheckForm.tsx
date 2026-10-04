"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Paperclip,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";
import {
  NOT_SURE_YET,
  SKILLS_CHECK_ACCEPTED_UPLOADS,
  SKILLS_CHECK_CONSENT_TEXT,
  SKILLS_CHECK_DEFAULTS,
  SKILLS_CHECK_FORMAL,
  SKILLS_CHECK_INDUSTRIES,
  SKILLS_CHECK_LOCATIONS,
  SKILLS_CHECK_MAX_UPLOAD_BYTES,
  SKILLS_CHECK_STATES,
  SKILLS_CHECK_STEP_TITLES,
  SKILLS_CHECK_YEARS,
  qualificationsFor,
} from "@/lib/skills-check-data";

const TOTAL_STEPS = 5;

type CvFile = {
  filename: string;
  mime: string;
  contentBase64: string;
  size: number;
};

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Could not read file"));
        return;
      }
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

function RadioCard({
  name,
  value,
  selected,
  onSelect,
  big,
  small,
}: {
  name: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  big: string;
  small?: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      name={name}
      onClick={() => onSelect(value)}
      className={`flex flex-col items-center justify-center rounded-xl border-2 px-4 py-5 text-center transition-all ${
        selected
          ? "border-accent bg-accent/10 shadow-card"
          : "border-border bg-card hover:border-accent/60 hover:shadow-card"
      }`}
    >
      <span className="font-display text-2xl font-bold sm:text-3xl">{big}</span>
      {small && <span className="mt-1 text-sm text-muted-foreground">{small}</span>}
    </button>
  );
}

export function SkillsCheckForm() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState("");
  const [qualification, setQualification] = useState("");
  const [years, setYears] = useState<string>(SKILLS_CHECK_DEFAULTS.years);
  const [location, setLocation] = useState<string>(SKILLS_CHECK_DEFAULTS.location);
  const [state, setState] = useState<string>(SKILLS_CHECK_DEFAULTS.state);
  const [hasFormal, setHasFormal] = useState<string>(SKILLS_CHECK_DEFAULTS.formal);
  const [formalDetails, setFormalDetails] = useState("");
  const [cv, setCv] = useState<CvFile | null>(null);
  const [fileError, setFileError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState("");
  const [consent, setConsent] = useState(false);
  const [stepError, setStepError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  const qualOptions = industry ? qualificationsFor(industry) : [];

  const validateStep = (s: number): string => {
    if (s === 1) {
      if (!industry) return "Please select your industry.";
      if (!qualification) return "Please select the qualification you are looking for.";
    }
    if (s === 2) {
      if (!years) return "Please select your years of experience.";
      if (!location) return "Please select where your experience is from.";
    }
    if (s === 3 && !state) return "Please select the state you live in.";
    if (s === 4 && hasFormal !== "Yes" && hasFormal !== "No")
      return "Please tell us whether you have formal qualifications.";
    return "";
  };

  const next = () => {
    const err = validateStep(step);
    setStepError(err);
    if (err) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    setStepError("");
  };

  const prev = () => {
    setStep((s) => Math.max(s - 1, 1));
    setStepError("");
    setSubmitError("");
  };

  const handleIndustry = (value: string) => {
    setIndustry(value);
    setQualification("");
    setStepError("");
  };

  const handleFile = async (file: File | undefined) => {
    setFileError("");
    if (!file) return;
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!(SKILLS_CHECK_ACCEPTED_UPLOADS as readonly string[]).includes(ext)) {
      setFileError("Only PDF or DOCX files can be uploaded.");
      return;
    }
    if (file.size > SKILLS_CHECK_MAX_UPLOAD_BYTES) {
      setFileError("The uploaded file must be smaller than 3MB.");
      return;
    }
    try {
      const contentBase64 = await readFileAsBase64(file);
      setCv({ filename: file.name, mime: file.type, contentBase64, size: file.size });
    } catch {
      setFileError("Could not read that file. Please try another file.");
    }
  };

  const validateContact = (): string => {
    if (!firstName.trim()) return "First name is required.";
    if (!lastName.trim()) return "Last name is required.";
    if (!phone.replace(/[\s()-]/g, "") || phone.replace(/\D/g, "").length < 8)
      return "Please enter a valid contact number.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return "Please enter a valid email address.";
    if (!consent) return "Please accept the terms and conditions and privacy policy.";
    return "";
  };

  const submit = async () => {
    const err = validateContact();
    setSubmitError(err);
    if (err) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/skills-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry,
          qualification,
          years,
          location,
          state,
          hasFormal,
          formalDetails: hasFormal === "Yes" ? formalDetails : "",
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          questions: questions.trim(),
          consent,
          cv: cv
            ? { filename: cv.filename, mime: cv.mime, contentBase64: cv.contentBase64 }
            : null,
        }),
      });
      const data = (await res.json()) as { error?: string; success?: boolean };
      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setSubmitError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
        <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="size-8 text-accent" />
        </span>
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Thanks, {firstName}! Your skills check is complete.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A Skills Connect consultant will review your experience and be in touch shortly
          about your pathway to {qualification === NOT_SURE_YET ? "a recognised qualification" : qualification}.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-border bg-background p-6 text-left">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Your answers</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Industry</dt><dd className="text-right font-medium">{industry}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Qualification</dt><dd className="text-right font-medium">{qualification}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Experience</dt><dd className="text-right font-medium">{years} · {location}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">State</dt><dd className="text-right font-medium">{state}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Formal qualifications</dt><dd className="text-right font-medium">{hasFormal}</dd></div>
          </dl>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <Link href="/rpl-evidence-guides">Browse RPL evidence guides <ArrowRight className="size-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a>
          </Button>
        </div>
      </div>
    );
  }

  const percent = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      {/* Progress header */}
      <div className="border-b border-border bg-secondary/60 px-6 py-5 sm:px-8">
        <ol className="flex items-center justify-between gap-1 sm:gap-2">
          {SKILLS_CHECK_STEP_TITLES.map((title, i) => {
            const n = i + 1;
            const active = n === step;
            const complete = n < step;
            return (
              <li key={title} className="flex flex-1 items-center last:flex-none">
                <span
                  aria-current={active ? "step" : undefined}
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors sm:size-9 sm:text-sm ${
                    complete
                      ? "bg-accent text-accent-foreground"
                      : active
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {complete ? <CheckCircle2 className="size-4 sm:size-5" /> : n}
                </span>
                <span
                  className={`ml-2 hidden text-xs font-semibold sm:block ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {title}
                </span>
                {n < TOTAL_STEPS && <span className="mx-2 h-px flex-1 bg-border sm:mx-3" />}
              </li>
            );
          })}
        </ol>
        <div className="mt-4 flex items-center justify-between text-sm">
          <p className="font-semibold text-muted-foreground">
            {step}/{TOTAL_STEPS}
          </p>
          <p className="font-semibold">{SKILLS_CHECK_STEP_TITLES[step - 1]}</p>
          <p className="font-semibold text-muted-foreground">{percent}%</p>
        </div>
        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-label="Skills check progress"
        >
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="px-6 py-8 sm:px-8 sm:py-10">
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <label htmlFor="sc-industry" className="text-xl font-bold sm:text-2xl">
              What industry is your experience in?
            </label>
            <select
              id="sc-industry"
              value={industry}
              onChange={(e) => handleIndustry(e.target.value)}
              className="mt-4 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm shadow-card outline-none focus:border-accent"
            >
              <option value="">Select Industry</option>
              {SKILLS_CHECK_INDUSTRIES.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>

            <label htmlFor="sc-qualification" className="mt-8 block text-xl font-bold sm:text-2xl">
              What qualification are you looking for?
            </label>
            <select
              id="sc-qualification"
              value={qualification}
              onChange={(e) => {
                setQualification(e.target.value);
                setStepError("");
              }}
              disabled={!industry}
              className="mt-4 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm shadow-card outline-none focus:border-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select Qualification</option>
              {industry && <option value={NOT_SURE_YET}>{NOT_SURE_YET}</option>}
              {qualOptions.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
            {!industry && (
              <p className="mt-2 text-xs text-muted-foreground">
                Select an industry first to see its qualifications.
              </p>
            )}
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <p className="text-xl font-bold sm:text-2xl" id="sc-years-label">
              How many years of relevant work experience do you have?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-labelledby="sc-years-label">
              {(SKILLS_CHECK_YEARS as readonly string[]).map((y) => {
                const [big, ...rest] = y.split(" ");
                return (
                  <RadioCard
                    key={y}
                    name="years"
                    value={y}
                    selected={years === y}
                    onSelect={setYears}
                    big={big}
                    small={rest.join(" ").toLowerCase()}
                  />
                );
              })}
            </div>

            <p className="mt-8 text-xl font-bold sm:text-2xl" id="sc-location-label">
              Where is your work experience?
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3" role="radiogroup" aria-labelledby="sc-location-label">
              {(SKILLS_CHECK_LOCATIONS as readonly string[]).map((l) => (
                <RadioCard key={l} name="location" value={l} selected={location === l} onSelect={setLocation} big={l} />
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <p className="text-xl font-bold sm:text-2xl" id="sc-state-label">
              What state do you live in?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-labelledby="sc-state-label">
              {(SKILLS_CHECK_STATES as readonly string[]).map((s) => (
                <RadioCard key={s} name="state" value={s} selected={state === s} onSelect={setState} big={s} />
              ))}
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <p className="text-xl font-bold sm:text-2xl" id="sc-formal-label">
              Do you have any formal qualifications?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-md" role="radiogroup" aria-labelledby="sc-formal-label">
              {(SKILLS_CHECK_FORMAL as readonly string[]).map((f) => (
                <RadioCard key={f} name="formal" value={f} selected={hasFormal === f} onSelect={setHasFormal} big={f} />
              ))}
            </div>

            {hasFormal === "Yes" && (
              <div className="mt-6 rounded-xl border border-border bg-background p-5">
                <label htmlFor="sc-formal-details" className="text-lg font-bold">
                  What are your qualifications?
                </label>
                <textarea
                  id="sc-formal-details"
                  value={formalDetails}
                  onChange={(e) => setFormalDetails(e.target.value)}
                  placeholder="I'll Type (optional)"
                  maxLength={2000}
                  rows={4}
                  className="mt-3 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                />
                <p className="mt-4 text-sm font-semibold">Upload your CV or resume (optional, PDF or DOCX, max 3MB)</p>
                {cv ? (
                  <div className="mt-2 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm">
                    <Paperclip className="size-4 shrink-0 text-accent" />
                    <span className="min-w-0 flex-1 truncate font-medium">{cv.filename}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {(cv.size / 1024).toFixed(0)} KB
                    </span>
                    <button
                      type="button"
                      onClick={() => setCv(null)}
                      aria-label="Remove uploaded file"
                      className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ) : (
                  <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground">
                    <Paperclip className="size-4" />
                    Choose a PDF or DOCX file
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      className="sr-only"
                      onChange={(e) => handleFile(e.target.files?.[0])}
                    />
                  </label>
                )}
                {fileError && <p className="mt-2 text-sm font-medium text-destructive">{fileError}</p>}
              </div>
            )}
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <p className="text-lg text-muted-foreground">
              Enter your details below to download our free RPL info guide on the next page.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="sc-first" className="sr-only">First Name</label>
                <input
                  id="sc-first"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name*"
                  autoComplete="given-name"
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="sc-last" className="sr-only">Last Name</label>
                <input
                  id="sc-last"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name*"
                  autoComplete="family-name"
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="sc-phone" className="sr-only">Contact Number</label>
                <input
                  id="sc-phone"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contact Number*"
                  autoComplete="tel"
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="sc-email" className="sr-only">Email</label>
                <input
                  id="sc-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"
                  autoComplete="email"
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
            </div>
            <label htmlFor="sc-questions" className="sr-only">Any Questions for us?</label>
            <textarea
              id="sc-questions"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              placeholder="Any Questions for us?"
              rows={3}
              className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
            />
            <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]"
              />
              <span>{SKILLS_CHECK_CONSENT_TEXT}</span>
            </label>
          </div>
        )}

        {stepError && (
          <p role="alert" className="mt-6 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
            {stepError}
          </p>
        )}
        {submitError && (
          <p role="alert" className="mt-6 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
            {submitError}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 1 ? (
            <Button variant="outline" size="lg" onClick={prev} disabled={submitting}>
              <ArrowLeft className="size-4" /> Previous
            </Button>
          ) : (
            <span />
          )}
          {step < TOTAL_STEPS ? (
            <Button variant="hero" size="lg" onClick={next}>
              Next <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button variant="hero" size="lg" onClick={submit} disabled={submitting}>
              {submitting ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>Submit <ArrowRight className="size-4" /></>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
