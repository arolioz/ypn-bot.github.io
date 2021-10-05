const HeroSection = () => {
    return (
        <div className={'flex justify-evenly items-center bg-gray-900 py-10'}>
            <img
                src="https://cdn.discordapp.com/attachments/812742164454441013/871435345823150150/WumpusRig.png"
                alt="15"
                width="400"
                height="400"
            />
            <div className={'flex justify-center items-center flex-col'}>
                <h1
                    className={
                        'text-white text-6xl font-extrabold max-w-lg mb-5 text-center'
                    }
                >
                    Imagine having nitro
                </h1>
                <p
                    className={
                        'text-gray-200 text-lg font-bold max-w-md text-center'
                    }
                >
                    YPN is a Discord Bot that allows users use emojis without
                    the need for Nitro.
                </p>
                <button className="px-12 py-4 pb-6 flex justify-center items-center text-green-primary text-6xl font-bold rounded-3xl border-8 bg-transparent border-green-primary focus:outline-none mt-5 duration-300 transform hover:scale-110 hover:text-white">
                    Invite
                </button>
            </div>
        </div>
    );
};
export default HeroSection;
