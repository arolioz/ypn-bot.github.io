import YPN_LOGO from '../../../public/YPN.svg';
import Link from '../Link';
import { Link as NavbarLink } from '@reach/router';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import {
    MdOutlinePrivacyTip,
    FaQuestion,
    BsDiscord,
    GiPerspectiveDiceSixFacesRandom,
} from 'react-icons/all';
const navLinks = [
    {
        text: 'Privacy',
        path: 'privacy',
        icon: <MdOutlinePrivacyTip />,
    },
    {
        text: 'FAQ',
        path: 'faq',
        icon: <FaQuestion />,
    },
    {
        text: 'Support',
        path: 'https://discord.gg/PkfXzyhgTx',
        external: true,
        icon: <BsDiscord />,
    },
    {
        text: 'Random',
        path: 'random',
        icon: <GiPerspectiveDiceSixFacesRandom />,
    },
];
const Navbar = () => {
    const isMobile = useCheckMobileScreen();
    if (isMobile) {
        return (
            <nav className="bg-gray-800 flex justify-evenly items-center py-2">
                <div className="flex text-white font-semibold">
                    {navLinks.slice(0, navLinks.length / 2).map((navLink) => (
                        <Link
                            className="px-5 py-2 rounded-xl hover:bg-gray-600 text-lg"
                            to={navLink.path}
                            key={navLink.text}
                            isExternalLink={!!navLink.external}
                        >
                            {navLink.icon}
                        </Link>
                    ))}
                </div>
                <NavbarLink to="/">
                    <img src={YPN_LOGO} alt="YPN_LOGO" width="35" height="35" />
                </NavbarLink>
                <div className="flex text-white font-semibold">
                    {navLinks
                        .slice(navLinks.length / 2, navLinks.length)
                        .map((navLink) => (
                            <Link
                                className="px-5 py-2 rounded-xl hover:bg-gray-600 text-lg"
                                to={navLink.path}
                                key={navLink.text}
                                isExternalLink={!!navLink.external}
                            >
                                {navLink.icon}
                            </Link>
                        ))}
                </div>
            </nav>
        );
    }
    return (
        <nav className="bg-gray-800 flex justify-evenly items-center py-3">
            <div className="space-x-5 text-white font-semibold">
                {navLinks.slice(0, navLinks.length / 2).map((navLink) => (
                    <Link
                        className="px-10 py-2 rounded-xl hover:bg-gray-600 text-lg"
                        to={navLink.path}
                        key={navLink.text}
                        isExternalLink={!!navLink.external}
                    >
                        {navLink.text}
                    </Link>
                ))}
            </div>
            <Link to="/">
                <img src={YPN_LOGO} alt="YPN_LOGO" width="40" height="40" />
            </Link>
            <div className={'space-x-5 text-white font-semibold text-lg'}>
                {navLinks
                    .slice(navLinks.length / 2, navLinks.length)
                    .map((navLink) => (
                        <Link
                            className="px-10 py-2 rounded-xl hover:bg-gray-600 text-lg"
                            to={navLink.path}
                            key={navLink.text}
                            isExternalLink={!!navLink.external}
                        >
                            {navLink.text}
                        </Link>
                    ))}
            </div>
        </nav>
    );
};

export default Navbar;
