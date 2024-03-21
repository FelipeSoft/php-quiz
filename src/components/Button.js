
export const Button = ({ enable, backgroundColor, label, onClick }) => {
    return (
        <button onClick={onClick} className={`w-full h-max px-4 py-2 ${backgroundColor} rounded-md text-white text-xs
        ${enable && "block pointer-events-auto"} 
        ${!enable && "pointer-events-none hidden"}`}>
        { label }
        </button>
    )
}