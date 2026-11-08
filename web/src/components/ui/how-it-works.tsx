import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import { Reveal } from "@/components/Reveal";

export type HowItWorksStep = {
  title: string;
  body: string;
  icon: Icon;
};

export function HowItWorksSteps({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <ol className="relative mt-14 flex flex-col gap-6 border-l border-dashed border-platinum/15 pl-10 sm:pl-12">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Reveal delay={i * 0.05}>
            <span className="absolute -left-[3.65rem] top-1 grid size-9 place-items-center rounded-full border border-platinum/10 bg-onyx-raised font-mono text-xs font-semibold text-platinum shadow-sm shadow-black/20 sm:-left-[4.15rem]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-start gap-3 rounded-xl border border-platinum/10 bg-onyx p-4 sm:p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold-l1">
                <step.icon size={18} weight="bold" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold tracking-tight text-platinum">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-platinum-dim">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
