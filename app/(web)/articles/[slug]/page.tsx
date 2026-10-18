interface PageProps {
    params:Promise<{slug:"title"}>
}
export default async function page({
    params
}:PageProps) {
    const {slug} = await params;
    return (
        <div>{slug}</div>
      )
}
