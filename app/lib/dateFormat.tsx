export default function formatDate(iso: string | null, locale = "en-US") {
    if(!iso) return null
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    }).format(new Date(iso));
}