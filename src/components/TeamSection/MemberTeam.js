import PropType from 'prop-types';
import clsx from 'clsx';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
const MemberTeam = ({
    username,
    avatarURL,
    role,
    positionFirstAvatar,
    socialMediaList,
}) => {
    const isMobile = useCheckMobileScreen();
    if (isMobile) {
        return (
            <div className="flex items-center flex-col my-10 p-3">
                <img
                    className="rounded-full border-8 border-black"
                    src={avatarURL}
                    width="180"
                    height="200"
                    alt={username.toLowerCase()}
                />
                <h2 className="text-xl font-bold mt-4 text-center">
                    {username}
                </h2>
            </div>
        );
    }
    return (
        <div
            className={clsx(
                'flex justify-around items-center my-10',
                positionFirstAvatar && 'flex-row-reverse'
            )}
        >
            <img
                className="rounded-full border-8 border-black"
                src={avatarURL}
                width="250"
                height="250"
                alt={username.toLowerCase()}
            />
            <div
                className={clsx(
                    'flex items-center mx-10',
                    positionFirstAvatar && 'flex-row-reverse'
                )}
            >
                <div className="w-6 overflow-hidden inline-block">
                    <div
                        className={clsx(
                            'h-10 bg-gray-900 transform',
                            positionFirstAvatar
                                ? 'rotate-45 origin-top-left'
                                : '-rotate-45 origin-top-right'
                        )}
                    />
                </div>
                <div className="bg-gray-900 flex justify-around items-center flex-col h-60 w-64 py-5 rounded-3xl">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-white font-bold text-2xl">
                            {username}
                        </h1>
                        <p className="text-green-primary font-medium text-lg">
                            {role}
                        </p>
                    </div>
                    <div>
                        {socialMediaList && (
                            <div className="mt-px flex justify-center items-center">
                                {socialMediaList.map(
                                    (
                                        {
                                            iconComponent: IconComponent,
                                            urlRedirect,
                                        },
                                        index
                                    ) => {
                                        return (
                                            <a
                                                key={index}
                                                href={urlRedirect}
                                                className="m-2 text-white duration-500"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <IconComponent className="text-2xl" />
                                            </a>
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
    socialMediaList: PropType.array,
};
export default MemberTeam;
