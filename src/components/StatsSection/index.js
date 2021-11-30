import {
    FaHashtag,
    FaUsers,
    HiEmojiHappy,
    DiWebplatform
} from 'react-icons/all';
import * as React from 'react';
const statsItems = [
    {
        type: 'Channels',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: FaHashtag,
        color: '#FCD34D'
    },
    {
        type: 'Users',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: FaUsers,
        color: '#6EE7B7'
    },
    {
        type: 'Emojis',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: HiEmojiHappy,
        color: '#A5B4FC'
    },
    {
        type: 'WebHooks',
        amount: Math.floor(
            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) + 1000 * 100 * 2
        ),
        icon: DiWebplatform,
        color: '#C4B5FD'
    }
];
const StatsSection = () => {
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center bg-gray-800">
                {statsItems.map(StatsItem => (
                    <div
                        key={StatsItem.type}
                        className="flex flex-col items-center justify-center px-10 py-10 lg:p-20"
                    >
                        {
                            <StatsItem.icon
                                className="text-7xl lg:text-8xl"
                                color={StatsItem.color}
                            />
                        }
                        <div
                            className="my-2 text-xl font-bold lg:text-2xl"
                            style={{
                                color: StatsItem.color
                            }}
                        >
                            {StatsItem.amount}
                        </div>
                        <div className="text-white text-lg font-bold lg:text-xl">
                            {StatsItem.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StatsSection;
