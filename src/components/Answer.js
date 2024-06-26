
export const Answer = ({ className, label, onClick, validator = 0, isCorrect, standard, isSelected, confirmed }) => {
    return (
        <div
        onClick={onClick}
        className={`${className} text-xs h-max cursor-pointer w-full border-2 border-blue-950 rounded-md 
            ${!isSelected && "text-white pointer-events"} 
            ${isSelected && "pointer-events-none"} 
            ${confirmed && "pointer-events-none"} 
            ${isCorrect && "pointer-events-none"} flex items-center justify-start mb-4 px-4 py-2 hover:bg-slate-800  
            ${isSelected && confirmed && !validator && "bg-red-800 border-red-800 text-white"}
            ${isSelected && !confirmed && "border-white bg-white text-black font-bold"}
            ${standard && "bg-slate-900"}
            ${isSelected && confirmed && validator && "bg-green-800 border-green-800 text-white"}
            ${isCorrect && "bg-green-800 border-green-800 text-white"}
            `}>
        {label}
        </div>
    );
};
  