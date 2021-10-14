import {
    FaHashtag,
    FaUsers,
    HiEmojiHappy,
    DiWebplatform,
} from 'react-icons/all';
import React from 'react';
const statsItems = [
    {
        type: 'Channels',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: FaHashtag,
        color: '#FCD34D',
    },
    {
        type: 'Users',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: FaUsers,
        color: '#6EE7B7',
    },
    {
        type: 'Emojis',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: HiEmojiHappy,
        color: '#A5B4FC',
    },
    {
        type: 'WebHooks',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: DiWebplatform,
        color: '#C4B5FD',
    },
];
const StatsSection = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-wrap bg-gray-800">
                {statsItems.map((statsItem) => (
                    <div
                        key={statsItem.type}
                        className="flex justify-center items-center flex-col px-10 py-10 lg:p-20"
                    >
                        {React.createElement(statsItem.icon, {
                            className: 'text-7xl lg:text-8xl',
                            color: statsItem.color,
                        })}
                        <div
                            className="text-xl lg:text-2xl font-bold my-2"
                            style={{
                                color: statsItem.color,
                            }}
                        >
                            {statsItem.amount}
                        </div>
                        <div className="text-white font-bold text-lg lg:text-xl">
                            {statsItem.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StatsSection;
