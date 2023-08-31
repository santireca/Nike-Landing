

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-red-500 duration-200 transition hover:scale-105 hover:text-white hover:border-red-500
            ${
                backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : "bg-coral-red text-white border-coral-red"
            } rounded-full ${fullWidth && "w-full"}`}
        >
            {label}
            {iconUrl &&<img 
                src={iconUrl}
                alt="Arrow right"
                className=" ml-2 rounded-full w-5 h-5" 
            />}
        </button>
    )
}

export default Button