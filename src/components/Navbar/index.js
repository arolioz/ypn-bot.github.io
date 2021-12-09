import * as React from 'react';
import YPN_LOGO from '../../../public/YPN.svg';
import Link from '../Link';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import clsx from 'clsx';
import {
    MdOutlinePrivacyTip,
    FaQuestion,
    BsDiscord,
    GiPerspectiveDiceSixFacesRandom
} from 'react-icons/all';
const navbarLinks = [
    {
        text: 'Privacy',
        path: 'privacy',
        icon: MdOutlinePrivacyTip
    },
    {
        text: 'FAQ',
        path: 'faq',
        icon: FaQuestion
    },
    {
        text: 'Support',
        path: 'https://discord.gg/PkfXzyhgTx',
        external: true,
        icon: BsDiscord
    },
    {
        text: 'Random',
        path: 'random',
        icon: GiPerspectiveDiceSixFacesRandom
    }
];
const Navbar = () => {
    const isMobile = useCheckMobileScreen();
    return (
        <nav className="flex items-center justify-evenly py-3 bg-gray-900">
            <div
                className={clsx('text-white font-semibold', {
                    flex: isMobile,
                    'space-x-5': !isMobile
                })}
            >
                {navbarLinks
                    .slice(0, navbarLinks.length / 2)
                    .map(NavbarLink => {
                        if (isMobile) {
                            return (
                                <Link
                                    className="px-5 py-2 text-lg hover:bg-gray-600 rounded-xl"
                                    to={NavbarLink.path}
                                    key={NavbarLink.text}
                                    isExternalLink={!!NavbarLink.external}
                                    aria-label={NavbarLink.text}
                                >
                                    {<NavbarLink.icon />}
                                </Link>
                            );
                        }
                        return (
                            <Link
                                className="px-10 py-2 text-lg hover:bg-gray-600 rounded-xl"
                                to={NavbarLink.path}
                                key={NavbarLink.text}
                                isExternalLink={!!NavbarLink.external}
                                aria-label={NavbarLink.text}
                            >
                                {NavbarLink.text}
                            </Link>
                        );
                    })}
            </div>
            <Link to="/" isExternalLink={false}>
                <img
                    src={YPN_LOGO}
                    alt="YPN_LOGO"
                    width={isMobile ? 30 : 40}
                    height={isMobile ? 30 : 40}
                />
            </Link>
            <div
                className={clsx('text-white font-semibold', {
                    flex: isMobile,
                    'space-x-5': !isMobile
                })}
            >
                {navbarLinks
                    .slice(navbarLinks.length / 2, navbarLinks.length)
                    .map(NavbarLink => {
                        if (isMobile) {
                            return (
                                <Link
                                    className="px-5 py-2 text-lg hover:bg-gray-600 rounded-xl"
                                    to={NavbarLink.path}
                                    key={NavbarLink.text}
                                    isExternalLink={!!NavbarLink.external}
                                    aria-label={NavbarLink.text}
                                >
                                    {<NavbarLink.icon />}
                                </Link>
                            );
                        }
                        return (
                            <Link
                                className="px-10 py-2 text-lg hover:bg-gray-600 rounded-xl"
                                to={NavbarLink.path}
                                key={NavbarLink.text}
                                isExternalLink={!!NavbarLink.external}
                                aria-label={NavbarLink.text}
                            >
                                {NavbarLink.text}
                            </Link>
                        );
                    })}
            </div>
        </nav>
    );
};

export default Navbar;
