import YPN_LOGO from '../../../public/YPN.svg';
const Navbar = () => {
    return (
        <nav className="bg-gray-800 flex justify-evenly items-center py-3">
            <div className={'space-x-5 text-white font-semibold text-lg'}>
                <a
                    href="#"
                    className={'px-10 py-2 rounded-xl hover:bg-gray-600 '}
                >
                    option
                </a>
                <a
                    href="#"
                    className={'px-10 py-2 rounded-xl hover:bg-gray-600 '}
                >
                    option
                </a>
            </div>
            <img src={YPN_LOGO} alt="YPN_LOGO" width="40" height="40" />
            <div className={'space-x-5 text-white font-semibold text-lg'}>
                <a
                    href="#"
                    className={'px-10 py-2 rounded-xl  hover:bg-gray-600 '}
                >
                    option
                </a>
                <a
                    href="#"
                    className={'px-10 py-2 rounded-xl  hover:bg-gray-600 '}
                >
                    option
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
