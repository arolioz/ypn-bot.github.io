import Link from '../Link';
const FooterItems = [
    {
        category: 'About',
        links: [
            {
                text: 'Home',
                path: 'home',
            },
            {
                text: 'Privacy',
                path: 'privacy',
            },
            {
                text: 'faq',
                path: 'faq',
            },
        ],
    },
    {
        category: 'Community',
        links: [
            {
                text: "Support' server",
                path: 'https://discord.gg/PkfXzyhgTx',
                external: true,
            },
            {
                text: 'Invite',
                path: '...',
                external: true,
            },
        ],
    },
];
const Footer = () => {
    return (
        <div className="bg-gray-primary flex justify-around py-16 px-10 flex-col lg:flex-row">
            <div className="flex flex-col mb-10">
                <p className="text-green-primary max-w-xs font-black text-4xl opacity-95">
                    Imagine having nitro
                </p>
                <p className="text-white text-lg opacity-90 mt-2">
                    @YPN coorporation
                </p>
            </div>
            {FooterItems.map((footerItem) => (
                <div key={footerItem.category} className="flex flex-col mb-10">
                    <h2 className="text-green-primary font-semibold text-2xl mb-2">
                        {footerItem.category}
                    </h2>
                    <div className="flex justify-start items-start flex-col space-y-2">
                        {footerItem.links.map((footerLinkItem) => (
                            <Link
                                key={footerLinkItem.text}
                                className="text-white text-sm font-medium hover:underline"
                                isExternalLink={!!footerLinkItem.external}
                                to={footerLinkItem.path}
                            >
                                {footerLinkItem.text}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Footer;
