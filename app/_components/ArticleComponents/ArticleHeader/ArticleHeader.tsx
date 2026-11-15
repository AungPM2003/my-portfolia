type ArticleHeader = {
    small: boolean
}
export function ArticleHeader({ small }: ArticleHeader) {
    return (
        <div className={`${small ? "lg:hidden block" : "lg:block hidden"} flex flex-col gap-4`}>
            <h2 className="text-hero/tight text-highlight  font-bold tracking-wide">
                Articles
            </h2>
            <p className="text-body/tight tracking-wide border-b pb-2">
                Here are some of the latest articles that I've learned.
            </p>

        </div>
    )
}
