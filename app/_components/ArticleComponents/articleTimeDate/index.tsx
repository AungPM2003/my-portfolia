import formatDate from "@/app/lib/dateFormat"
type componentProps = {
    publishedAt: string | null | undefined
    timeToRead:number | null | undefined
}
export default function index({publishedAt,timeToRead}:componentProps) {
  if(!publishedAt) return null;
  return (
    <div className="text-tag/tight flex gap-2 items-center">
        <span >{formatDate(publishedAt)}</span>
        <span>.</span>
        <span>
            {timeToRead} min Read
        </span>
    </div>
  )
}
