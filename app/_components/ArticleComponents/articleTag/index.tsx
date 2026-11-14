type ArticleTag = {
  title: string | null;
};

export default function index({ title }: ArticleTag) {
  return (
    <span className="bg-highlight/15 text-[12px] text-tagColor rounded-full px-3 py-1">
      {title}
    </span>
  );
}
