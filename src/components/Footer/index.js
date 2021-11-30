import Link from '../Link';
const FooterItems = [
    {
        title: 'About',
        links: [
            {
                label: 'Home',
                to: '/'
            },
            {
                label: 'Privacy',
                to: 'privacy'
            },
            {
                label: 'faq',
                to: 'faq'
            }
        ]
    },
    {
        title: 'Community',
        links: [
            {
                label: "Support' server",
                to: 'https://discord.gg/PkfXzyhgTx',
                external: true
            },
            {
                label: 'Invite',
                to: 'https://discord.com/oauth2/authorize?client_id=815662828253347881&scope=bot%20applications.commands&permissions=2684365824',
                external: true
            }
        ]
    }
];
const Footer = () => {
    return (
        <div className="flex flex-col justify-around px-10 py-16 bg-ebony-500 lg:flex-row">
            <div className="flex flex-col mb-10">
                <p className="max-w-xs text-conifer text-4xl font-black opacity-95">
                    Imagine having nitro
                </p>
                <p className="mt-2 text-white text-lg opacity-90">@YPN Inc.</p>
            </div>
            {FooterItems.map(FooterItem => (
                <div key={FooterItem.title} className="flex flex-col mb-10">
                    <h2 className="mb-2 text-conifer text-2xl font-semibold">
                        {FooterItem.title}
                    </h2>
                    <div className="flex flex-col items-start justify-start space-y-2">
                        {FooterItem.links.map(footerLinkItem => (
                            <Link
                                key={footerLinkItem.label}
                                className="text-white hover:underline text-sm font-medium"
                                isExternalLink={!!footerLinkItem.external}
                                to={footerLinkItem.to}
                            >
                                {footerLinkItem.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Footer;
