type Props = {
    toggle:boolean;
    handleToggle:() => void;
}
export default function NavModal({toggle,handleToggle}:Props) {
    if (!toggle) return null
    return (
        <div role="dialog" className="fixed inset-0 py-6 text-white z-50 grid place-items-center backdrop-blur-lg h-dvh">
            hello
        </div>
    )
}
