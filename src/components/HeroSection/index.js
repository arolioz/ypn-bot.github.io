import Link from '../Link';
const HeroSection = () => {
    return (
        <div className="flex items-center justify-evenly py-10 bg-gray-900">
            <img
                className="hidden lg:block"
                src="https://cdn.discordapp.com/attachments/812742164454441013/871435345823150150/WumpusRig.png"
                alt="YPN-LOGO"
                width="400"
                height="400"
            />
            <div className="center-container flex-col">
                <h1 className="mb-5 text-center text-white text-4xl font-extrabold tracking-wide lg:text-6xl">
                    <span className="block">IMAGINE HAVING</span>
                    <span className="block mt-1 text-conifer-500">NITRO</span>
                </h1>
                <p className="max-w-xs text-center text-gray-200 text-sm font-bold lg:max-w-md lg:text-lg">
                    YPN is a Discord Bot that allows users use emojis without
                    the need for Nitro.
                </p>
                <div className="center-container flex-col mt-6 lg:flex-row lg:space-x-10">
                    <Link
                        to="https://discord.com/oauth2/authorize?client_id=815662828253347881&scope=bot%20applications.commands&permissions=2684365824"
                        isExternalLink={true}
                        className="px-6 py-2.5 text-conifer-100 text-xl font-bold bg-transparent border-4 border-conifer rounded-lg hover:shadow-xl transform hover:scale-110 duration-300 lg:px-10 lg:py-3 lg:text-2xl"
                    >
                        Invite
                    </Link>
                    <Link
                        to="https://discord.com/oauth2/authorize?client_id=815662828253347881&scope=bot%20applications.commands&permissions=2684365824"
                        isExternalLink={true}
                        className="my-5 px-6 py-2.5 text-conifer-100 text-xl font-bold bg-transparent border-4 border-conifer rounded-lg hover:shadow-xl transform hover:scale-110 duration-300 lg:my-0 lg:px-10 lg:py-3 lg:text-2xl"
                    >
                        Support
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
