import { GrEmoji, BiSticker, AiFillApi } from 'react-icons/all';
import { useState } from 'react';
import clsx from 'clsx';
const FeactureSection = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const handleSelect = (index) => {
        setTabIndex(index);
    };
    return (
        <div className={'bg-gray-700 p-10'}>
            <div className="flex justify-evenly">
                <button
                    className={clsx(
                        tabIndex === 1 ? 'text-blue-500' : 'text-white',
                        'flex',
                        'flex-col',
                        'items-center',
                        'space-y-4'
                    )}
                    onClick={() => handleSelect(1)}
                    role="button"
                >
                    <strong className={clsx('font-bold text-3xl')}>
                        Emojis
                    </strong>
                    <GrEmoji size="60" />
                </button>
                <button
                    className={clsx(
                        tabIndex === 2 ? 'text-blue-500' : 'text-white',
                        'flex',
                        'flex-col',
                        'items-center',
                        'space-y-4'
                    )}
                    onClick={() => handleSelect(2)}
                >
                    <strong className={clsx('font-bold text-3xl')}>
                        Stickers
                    </strong>
                    <BiSticker size="60" />
                </button>
                <button
                    className={clsx(
                        tabIndex === 3 ? 'text-blue-500' : 'text-white',
                        'flex',
                        'flex-col',
                        'items-center',
                        'space-y-4'
                    )}
                    onClick={() => handleSelect(3)}
                >
                    <strong className={clsx('font-bold text-3xl')}>Api</strong>
                    <AiFillApi size="60" />
                </button>
            </div>
            <div className="bg-white h-0.5 my-8 rounded-xl"></div>
            <div>
                <div
                    className={clsx(
                        tabIndex === 1 ? 'flex' : 'hidden',
                        'justify-evenly',
                        'items-center'
                    )}
                >
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/812742164454441013/871973574049669120/G2_Madge.png"
                            width="150"
                            height="150"
                        />
                        <h2 className="text-white text-xl font-medium mt-5">
                            :PepoNoSeque:
                        </h2>
                    </div>
                    <div className="flex items-center flex-col text-white">
                        <h2 className={'text-3xl mb-2 font-medium'}>
                            Use emojis without the need for Nitro.
                        </h2>
                        <p className="text-center max-w-sm opacity-95 font-semibold">
                            YPN takes care of replacing your attempts at emojis,
                            to real ones, starting from your favorite emojis and
                            the thousands of existing aliases
                        </p>
                        <a
                            className="mt-5 bg-green-500 hover:bg-green-800 px-16 py-1 font-bold bg-opacity-75 text-lg"
                            href="#"
                        >
                            Try i!
                        </a>
                    </div>
                </div>
                <div
                    className={clsx(
                        tabIndex === 2 ? 'flex' : 'hidden',
                        'justify-evenly',
                        'items-center'
                    )}
                >
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/812742164454441013/871973574049669120/G2_Madge.png"
                            width="150"
                            height="150"
                        />
                        <h2 className="text-white text-xl font-medium mt-5">
                            :PepoNoSeque:
                        </h2>
                    </div>
                    <div className="flex items-center flex-col text-white">
                        <h2 className={'text-3xl mb-2 font-medium'}>
                            Use emojis without the need for Nitro.
                        </h2>
                        <p className="text-center max-w-sm opacity-95 font-semibold">
                            Stickers? Yes, images. Now YPN can spoof stickers
                            with your attempts. Being an image, who would say?
                        </p>
                        <a
                            className="mt-5 bg-green-500 hover:bg-green-800 px-16 py-1 font-bold bg-opacity-75 text-lg"
                            href="#"
                        >
                            Try i!
                        </a>
                    </div>
                </div>{' '}
                <div className={clsx(tabIndex === 3 ? 'flex' : 'hidden')}>
                    no
                </div>
            </div>
        </div>
    );
};
export default FeactureSection;
