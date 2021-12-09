import PropType from 'prop-types';
import clsx from 'clsx';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Link from '../Link';
const MemberTeam = ({
    username,
    avatarURL,
    role,
    positionFirstAvatar,
    socialMediaList
}) => {
    const isMobile = useCheckMobileScreen();
    if (isMobile) {
        return (
            <div className="flex flex-col items-center my-10 p-3">
                <img
                    className="border-8 border-black rounded-full"
                    src={avatarURL}
                    width="180"
                    height="200"
                    alt={username.toLowerCase()}
                />
                <h2 className="mt-4 text-center text-xl font-bold">
                    {username}
                </h2>
            </div>
        );
    }
    return (
        <div
            className={clsx(
                'flex items-center justify-around my-10',
                positionFirstAvatar && 'flex-row-reverse'
            )}
        >
            <img
                className="border-8 border-black rounded-full"
                src={avatarURL}
                width="230"
                height="230"
                alt={username.toLowerCase()}
            />
            <div
                className={clsx(
                    'flex items-center mx-10',
                    positionFirstAvatar && 'flex-row-reverse'
                )}
            >
                <div className="inline-block w-6 overflow-hidden">
                    <div
                        className={clsx(
                            'h-10 bg-gray-900 transform',
                            positionFirstAvatar
                                ? 'rotate-45 origin-top-left'
                                : '-rotate-45 origin-top-right'
                        )}
                    />
                </div>
                <div className="flex flex-col items-center justify-around py-5 w-64 h-60 bg-gray-900 rounded-3xl">
                    <div className="center-container flex-col">
                        <h1 className="text-white text-xl font-bold">
                            {username}
                        </h1>
                        <p className="text-conifer text-base font-medium">
                            {role}
                        </p>
                    </div>
                    <div>
                        {socialMediaList && (
                            <div className="center-container mt-px">
                                {socialMediaList.map(
                                    (
                                        {
                                            iconComponent: IconComponent,
                                            urlRedirect
                                        },
                                        index
                                    ) => {
                                        const { hostname } = new URL(
                                            urlRedirect
                                        );
                                        return (
                                            <Link
                                                isExternalLink={true}
                                                to={urlRedirect}
                                                key={index}
                                                className="m-2 hover:text-conifer text-white"
                                                aria-label={`${
                                                    hostname.split('.')[0]
                                                }-icon`}
                                            >
                                                <IconComponent className="text-xl" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
MemberTeam.propTypes = {
    username: PropType.string.isRequired,
    avatarURL: PropType.string.isRequired,
    role: PropType.string.isRequired,
    positionFirstAvatar: PropType.bool.isRequired,
    socialMediaList: PropType.array
};
export default MemberTeam;
