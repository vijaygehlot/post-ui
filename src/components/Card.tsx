import React, { useState } from 'react';
import AuthModal from './AuthModal';

interface CardProps {
    name: string;
    body: string;
    img: string;
    emoji: string;
    time: string;
    comment: string;
}

const Card: React.FC<CardProps> = ({ name, body, img, emoji, time, comment }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAuthModalClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex flex-col border-2 border-[#35373B] rounded-lg p-4 mb-4 mx-4 sm:mx-8 lg:mx-20 bg-[#35373B]">
            <div className="flex flex-row items-center justify-between mb-2">
                <div className="flex flex-row items-center">
                    <img
                        src={img}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full m-2"
                    />
                    <div className="ml-2 flex flex-col">
                        <span className="font-sans text-lg sm:text-xl text-[#C5C7CA]">{name}</span>
                        <span className="text-sm text-[#7F8084]">{time}</span>
                    </div>
                </div>
                <i className="fa-solid fa-ellipsis text-[#C5C7CA] text-lg sm:text-xl cursor-pointer" onClick={handleAuthModalClick}></i>
            </div>

            <div className="flex flex-col sm:flex-row items-center mb-2 bg-[#191920] p-4 sm:p-6 lg:p-8 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#27292D] rounded-full mb-2 sm:mb-0 sm:mr-2">
                    <img
                        src={emoji}
                        alt="Emoji"
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    />
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-[#7F8084] text-left pl-3 sm:pl-0">{body}</p>
            </div>

            <div className="flex flex-row items-center mt-2">
                <i className="fa-regular fa-message text-lg sm:text-xl text-gray-300 mr-2"></i>
                <p className="text-sm sm:text-base text-gray-300" onClick={handleAuthModalClick}>{comment} Comments</p>
            </div>

            {showModal && <AuthModal onClose={closeModal} />}
        </div>
    );
};

export default Card;
