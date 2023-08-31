import { star } from "../assets/icons"


const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div
            className=" flex flex-col max-sm:w-full w-[280px] p-5 rounded-2xl hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer lg:p-0 lg:px-5 lg:pt-1 lg:pb-5"
        >
            <img 
                src={imgURL}
                alt={name}
                className=" w-[280px] h-[280px]"
            />
            <div
                className="mt-8 flex justify-start gap-2.5 "
            >
                <img 
                    src={star}
                    alt="rating"
                    width={24}
                    height={24} 
                />
                <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className=" mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-montserrat font-semibold text-2xl leading-normal text-coral-red">{price}</p>
        </div>
    )
}

export default PopularProductCard