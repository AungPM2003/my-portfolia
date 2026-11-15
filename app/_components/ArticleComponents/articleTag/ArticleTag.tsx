type ArticleTag = {
  title: string | null
}

export default function ArticleTag({ title }: ArticleTag) {
  return (
    <span className="bg-highlight/15 px-3 py-1 rounded-full text-tag text-tagColor" >{title}</span>
  )
}
