
type titleProps = {
    text:string;
}
export default function index({text}:titleProps) {
  return (
    <div className=" flex justify-end px-3">
        <h1 className="text-highlight-alt text-header">{text}</h1>
    </div>
  )
}

