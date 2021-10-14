import { GrEmoji, AiOutlineSearch, BsStopwatchFill } from 'react-icons/all';
import React, { useState } from 'react';
import clsx from 'clsx';
const feactureItems = [
    {
        type: 'Emojis',
        icon: GrEmoji,
        attachment:
            'https://cdn.discordapp.com/attachments/812742164454441013/871973574049669120/G2_Madge.png',
        emojiName: ':PepoNoSeque:',
        title: 'Use emojis without the need for Nitro.',
        paragraph:
            'YPN takes care of replacing your attempts at emojis, to real ones, starting from your favorite emojis and the thousands of existing aliases',
    },
    {
        type: 'Search',
        icon: AiOutlineSearch,
        attachment:
            'https://cdn.discordapp.com/attachments/812742164454441013/871973574049669120/G2_Madge.png',
        emojiName: ':PepoNoSeque:',
        title: 'Use emojis without the need for Nitro.',
        paragraph:
            'Stickers? Yes, images. Now YPN can spoof stickers with your attempts. Being an image, who would say?',
    },
    {
        type: 'Fastest',
        icon: BsStopwatchFill,
        attachment:
            'https://cdn.discordapp.com/emojis/455866415841280030.png?size=96',
        emojiName: ':PepoNoSeque:',
        title: "You don't need Nitro to be fast",
        paragraph:
            'Answers, searches and replacements. All in a system optimized for the best experience',
    },
];
const FeactureSection = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const handleSelect = (index) => {
        setTabIndex(index);
    };
    return (
        <div className={'bg-gray-700 p-10'}>
            <div className="flex justify-evenly">
                {feactureItems.map((feactureItem, index) => (
                    <button
                        key={feactureItem.type}
                        className={clsx(
                            tabIndex === index ? 'text-blue-500' : 'text-white',
                            'flex',
                            'flex-col',
                            'items-center'
                        )}
                        onClick={() => handleSelect(index)}
                        role="button"
                    >
                        <strong className="hidden font-bold text-xl lg:text-3xl lg:block mb-4">
                            {feactureItem.type}
                        </strong>
                        {React.createElement(feactureItem.icon, {
                            className: 'text-4xl lg:text-6xl',
                        })}
                    </button>
                ))}
            </div>
            <div className="bg-white h-0.5 my-8 rounded-xl"></div>
            <div>
                {feactureItems.map((feactureItem, index) => (
                    <div
                        key={feactureItem.type}
                        className={clsx(
                            tabIndex === index ? 'flex' : 'hidden',
                            'justify-evenly',
                            'items-center'
                        )}
                    >
                        <div className="hidden flex-col items-center lg:flex">
                            <img
                                src={feactureItem.attachment}
                                width="150"
                                height="150"
                            />
                            <h2 className="text-white text-xl font-medium mt-5">
                                {feactureItem.emojiName}
                            </h2>
                        </div>
                        <div className="flex items-center flex-col text-white">
                            <h2 className="text-xl mb-2 font-medium text-center lg:text-3xl">
                                {feactureItem.title}
                            </h2>
                            <p className="text-xs text-center max-w-sm opacity-90 font-semibold lg:text-base">
                                {feactureItem.paragraph}
                            </p>
                            <a
                                className="mt-5 bg-green-500 hover:bg-green-800 px-16 py-1 font-bold bg-opacity-75 text-lg"
                                href="#"
                            >
                                Try i!
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeactureSection;
