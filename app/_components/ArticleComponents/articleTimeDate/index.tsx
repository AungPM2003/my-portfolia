import formatDate from "@/app/lib/dateFormat";
type componentProps = {
  publishedAt: string | null | undefined;
  timeToRead: number | null | undefined;
};
export default function index({ publishedAt, timeToRead }: componentProps) {
  if (!publishedAt) return null;
  return (
    <div className="text-xs/tight flex items-center gap-2 flex-1 py-2">
      <span>{formatDate(publishedAt)}</span>
      &middot;
      <span>{timeToRead} min Read</span>
    </div>
  );
}
