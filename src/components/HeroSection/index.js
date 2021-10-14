const HeroSection = () => {
    return (
        <div className="flex justify-evenly items-center bg-gray-900 py-10">
            <img
                className="hidden lg:block"
                src="https://cdn.discordapp.com/attachments/812742164454441013/871435345823150150/WumpusRig.png"
                alt="15"
                width="400"
                height="400"
            />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-white text-4xl max-w-xs lg:text-6xl lg:max-w-lg  font-extrabold mb-5 text-center">
                    Imagine having nitro
                </h1>
                <p className="text-gray-200 text-sm max-w-xs lg:text-lg lg:max-w-md font-bold text-center">
                    YPN is a Discord Bot that allows users use emojis without
                    the need for Nitro.
                </p>
                <button className="px-8 py-3 text-2xl border-4 rounded-2xl lg:px-12 lg:py-4 lg:pb-6 lg:text-6xl lg:rounded-3xl text-green-primary lg:border-8 font-bold  bg-transparent border-green-primary focus:outline-none mt-5 duration-300 transform hover:scale-110 hover:text-white">
                    Invite
                </button>
            </div>
        </div>
    );
};
export default HeroSection;
