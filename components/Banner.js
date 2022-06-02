import Image from 'next/image';
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px 2xl:h-[700px]">
            <div className="absolute w-full h-full inset-0 bg-black opacity-40 z-10"></div>
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                alt="banner"
                objectFit="cover"
                priority
            />
            <div className="absolute top-1/2 w-full text-center z-20">
                <p className="text-sm sm:text-lg text-white">
                    Not sure where to go? Perfect.
                </p>
                <button className="text-red-400 bg-white px-10 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    I Am Flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;
