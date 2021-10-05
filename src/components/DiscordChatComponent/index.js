import { createRef as useRef, useState, useEffect } from 'react';
import PropType from 'prop-types';
import * as moment from 'moment';
import clsx from 'clsx';
import {
    IoMdAddCircle,
    AiFillGift,
    RiFileGifFill,
    HiEmojiHappy,
} from 'react-icons/all';
moment.locale('es');
const MessageComponent = ({
    authorAvatarURL,
    authorUsername,
    messageContent,
    createdAt,
}) => {
    return (
        <div className="py-3 flex items-start text-sm px-4 hover:bg-gray-backgroundMessageColorHover mr-2">
            <img
                src={authorAvatarURL}
                className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
                <div>
                    <span className="font-bold text-white cursor-pointer hover:underline">
                        {authorUsername}
                    </span>
                    <span className="font-bold text-gray-400 text-xs mx-2">
                        {moment(createdAt).calendar()}
                    </span>
                </div>
                <p className="text-white leading-normal">{messageContent}</p>
            </div>
        </div>
    );
};
MessageComponent.propTypes = {
    authorAvatarURL: PropType.string.isRequired,
    authorUsername: PropType.string.isRequired,
    messageContent: PropType.string.isRequired,
    createdAt: PropType.bool.isRequired,
};

const DiscordChatComponet = () => {
    const chatContainer = useRef();
    const messagesEndRef = useRef();
    const xd = useRef();
    const [slowmode, setSlowmode] = useState(false);
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const handleSubmit = (event) => {
        const messageContent = event.target.value;
        if (slowmode) return;
        if (event.keyCode === 13 && event.shiftKey) {
            event.preventDefault();
            console.log(xd.current.value);
            xd.current.value = 'aaa\nwadwadwad';
        }
        if (event.keyCode === 13 && messageContent) {
            const messagesToPushInState = [...messages];
            const newMessage = {
                authorAvatarURL:
                    'https://cdn.discordapp.com/avatars/473607082654957571/a5aaf82ae3559a4d61dd6b0eef8180e5.png',
                authorUsername: 'yo',
                messageContent,
                createdAt: Date.now(),
            };
            const messageOptions = {
                xd: 'hola',
                q: 'so',
            };
            const replyMessage = messageOptions[messageContent];
            if (replyMessage) {
                const messageBot = {
                    authorAvatarURL:
                        'https://cdn.discordapp.com/avatars/815662828253347881/0d44345026e88b5173a4c8603e6f98e5.png',
                    authorUsername: 'YPN',
                    messageContent: replyMessage,
                    createdAt: Date.now() + 5000,
                };
                messagesToPushInState.push(newMessage, messageBot);
            } else {
                messagesToPushInState.push(newMessage);
            }
            setMessages(messagesToPushInState);
            setSlowmode(true);
            setTimeout(() => setSlowmode(false), 2000);
            event.target.value = '';
        }
    };
    useEffect(() => {
        setInterval(() => {
            const messageBot = {
                authorAvatarURL:
                    'https://cdn.discordapp.com/avatars/815662828253347881/0d44345026e88b5173a4c8603e6f98e5.png',
                authorUsername: 'YPN',
                createdAt: Date.now(),
                messageContent:
                    'ml Hey, have you seen that you can use nitro-free animated emojis?\nYPN is the bot that solves those things for you Just trying to use an emoji<br/>*envia un mensaje con <:xd:818561294781251634> y es remplazado* Try it!',
            };
            setTyping(true);
            setTimeout(() => {
                setMessages(
                    (prevState) => [...prevState, messageBot],
                    setTyping(false)
                );
            }, 2000);
        }, 8000);
    }, []);
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div
            className={
                'bg-gray-backgroundMessageColor pt-3 pr-2 flex justify-center flex-col'
            }
        >
            <div
                id="chat_container"
                ref={chatContainer}
                className="overflow-y-scroll h-80 space-y-4"
                style={{ scrollbarColor: '#0A4C95' }}
            >
                {messages.map((messageProps, index) => (
                    <MessageComponent key={index} {...messageProps} />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="px-4">
                <div className="bg-gray-inputTextColor rounded-xl">
                    <div className="flex justify-center items-center rounded-lg overflow-hidden">
                        <div>
                            <button className="p-3.5">
                                <IoMdAddCircle size="30" color="#B9BBBE" />
                            </button>
                        </div>
                        <textarea
                            ref={xd}
                            rows="1"
                            onKeyUp={handleSubmit}
                            type="text"
                            className="w-full py-5 bg-gray-inputTextColor resize-none focus:outline-none text-gray-200"
                            placeholder="Message #general"
                        />
                        <div className={'flex justify-center items-center'}>
                            <button className="px-2">
                                <AiFillGift size="30" color="#B9BBBE" />
                            </button>
                            <button className=" px-2">
                                <RiFileGifFill size="30" color="#B9BBBE" />
                            </button>
                            <button className="px-2 mr-3">
                                <HiEmojiHappy size="30" color="#B9BBBE" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center py-1.5">
                    <div className="flex justify-center space-x-0.5 mx-3">
                        <div
                            className={clsx(
                                typing ? 'bg-white' : 'bg-transparent',
                                'rounded-full h-2 w-2 changeBackgroundColor-1'
                            )}
                        />
                        <div
                            className={clsx(
                                typing ? 'bg-white' : 'bg-transparent',
                                'rounded-full h-2 w-2 changeBackgroundColor-1'
                            )}
                        />
                        <div
                            className={clsx(
                                typing ? 'bg-white' : 'bg-transparent',
                                'rounded-full h-2 w-2 changeBackgroundColor-1'
                            )}
                        />
                    </div>
                    <p
                        className={clsx(
                            typing ? 'text-white' : 'text-transparent',
                            'font-extralight flex'
                        )}
                    >
                        <h1 className="font-semibold mr-1">YPN</h1> esta
                        escribiendo
                    </p>
                </div>
            </div>
        </div>
    );
};
export default DiscordChatComponet;
