import { StatItem } from "@/types";

interface StatCardProps {
  stat: StatItem;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="bg-surface p-space-lg rounded-lg shadow-sm flex flex-col justify-between min-h-[140px] border border-surface-container-highest/40">
      <span
        className={`font-headline-lg text-headline-lg tracking-tight ${
          stat.isSecondary ? "text-secondary" : "text-primary"
        }`}
      >
        {stat.value}
      </span>
      <div>
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary block">
          {stat.label}
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          {stat.subtext}
        </p>
      </div>
    </div>
  );
}
