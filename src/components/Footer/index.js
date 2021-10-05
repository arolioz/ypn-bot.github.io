const Footer = () => {
    return (
        <footer className="relative">
            <div className="bg-gray-primary flex justify-evenly p-4">
                <div className="flex flex-col">
                    <h2 className="text-white text-3xl font-bold">YPN</h2>
                    <p className="text-white text-xl opacity-95">Un bot poto</p>
                    <p className="text-green-primary text-sm opacity-90">
                        @YPN coorporation
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-white font-bold text-2xl mb-2">
                        About
                    </h2>
                    <div className="flex justify-start items-start flex-col space-y-2">
                        <a
                            className="text-green-primary text-sm font-medium"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="text-green-primary text-sm font-medium"
                            href="#"
                        >
                            Privacy
                        </a>
                        <a
                            className="text-green-primary text-sm font-medium"
                            href="#"
                        >
                            Q&amp;A
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-white font-bold text-2xl mb-2">
                        Community
                    </h2>
                    <div className="flex justify-start items-start flex-col space-y-2">
                        <a
                            className="text-green-primary text-sm font-medium"
                            href="#"
                        >
                            Support&apos; server
                        </a>
                        <a
                            className="text-green-primary text-sm font-medium"
                            href="#"
                        >
                            Invite
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
