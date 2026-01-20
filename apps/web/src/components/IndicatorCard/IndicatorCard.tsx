type IndicatorStatus =
  | "ok"
  | "alert"
  | "critical"
  | "neutral"
  | "processing";

interface IndicatorCardProps {
  title: string;
  value: string | number;
  status?: IndicatorStatus;
  variation?: string;
}

const statusColorMap: Record<IndicatorStatus, string> = {
  ok: "text-system-ok",
  alert: "text-system-alert",
  critical: "text-system-critical",
  neutral: "text-neutral-text-secondary",
  processing: "text-system-info",
};

export default function IndicatorCard({
  title,
  value,
  status = "ok",
  variation,
}: IndicatorCardProps) {
  const colorClass =
    statusColorMap[status] ?? statusColorMap.ok;

  return (
    <div className="bg-neutral-surface rounded-md shadow-sm p-4">
      <div className="text-sm text-neutral-text-secondary mb-1">
        {title}
      </div>

      <div className={`text-2xl font-bold ${colorClass}`}>
        {value}
      </div>

      {variation && (
        <div className="text-xs text-neutral-text-secondary mt-1">
          {variation}
        </div>
      )}
    </div>
  );
}
