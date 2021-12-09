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
            'YPN takes care of replacing your attempts at emojis, to real ones, starting from your favorite emojis and the thousands of existing aliases'
    },
    {
        type: 'Search',
        icon: AiOutlineSearch,
        attachment:
            'https://cdn.discordapp.com/attachments/812742164454441013/871973574049669120/G2_Madge.png',
        emojiName: ':PepoNoSeque:',
        title: 'Use emojis without the need for Nitro.',
        paragraph:
            'Stickers? Yes, images. Now YPN can spoof stickers with your attempts. Being an image, who would say?'
    },
    {
        type: 'Fastest',
        icon: BsStopwatchFill,
        attachment: 'https://cdn.discordapp.com/emojis/455866415841280030.png',
        emojiName: ':Nitro:',
        title: "You don't need Nitro to be fast",
        paragraph:
            'Answers, searches and replacements. All in a system optimized for the best experience'
    }
];
const FeactureSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleSelect = index => {
        setTabIndex(index);
    };
    return (
        <div className={'bg-gray-700 p-10'}>
            <div className="flex justify-evenly">
                {feactureItems.map((FeactureItem, index) => (
                    <button
                        key={FeactureItem.type}
                        aria-label={FeactureItem.type}
                        className={clsx(
                            tabIndex === index ? 'text-conifer' : 'text-white',
                            'center-container flex-col'
                        )}
                        onClick={() => handleSelect(index)}
                        role="button"
                    >
                        <strong className="hidden mb-4 text-xl font-bold lg:block lg:text-3xl">
                            {FeactureItem.type}
                        </strong>
                        {<FeactureItem.icon className="text-4xl lg:text-5xl" />}
                    </button>
                ))}
            </div>
            <div className="my-8 h-0.5 bg-white rounded-xl"></div>
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
                                width={150}
                                alt={`${feactureItem.type}-image`}
                            />
                            <h2 className="mt-5 text-white text-xl font-medium">
                                {feactureItem.emojiName}
                            </h2>
                        </div>
                        <div className="center-container flex-col text-white">
                            <h2 className="mb-2 text-center text-xl font-medium lg:text-3xl">
                                {feactureItem.title}
                            </h2>
                            <p className="max-w-sm text-center text-xs font-semibold opacity-90 lg:text-base">
                                {feactureItem.paragraph}
                            </p>
                            <a
                                className="mt-5 px-12 py-2 text-conifer-100 text-lg font-bold bg-transparent border-4 border-conifer rounded-lg hover:shadow-xl transform hover:scale-110 duration-300"
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
