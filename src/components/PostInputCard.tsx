import React,{useState} from 'react';
import AuthModal from './AuthModal';

interface PostInputCardProps {
    emoji: string;
    placeholder: string;
    buttonText: string;
}

const PostInputCard: React.FC<PostInputCardProps> = ({ emoji, placeholder, buttonText }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAuthModalClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="flex flex-col border-2 border-[#35373B] rounded-lg p-4 mb-4 mx-4 sm:mx-8 lg:mx-20 bg-[#35373B]">
     
            <div className="mb-4">
                <h5 className="text-xl font-semibold text-[#C5C7CA] text-left">Create Post</h5>
            </div>

          
            <div className="flex flex-col sm:flex-row items-center mb-4 bg-[#191920] p-4 sm:p-6 lg:p-8 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#27292D] rounded-full mb-2 sm:mb-0 sm:mr-2">
                    <img
                        src={emoji}
                        alt="Emoji"
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    />
                </div>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    className="w-full p-3 bg-[#191920] border-none rounded text-[#C5C7CA] placeholder-[#7F8084]" 
                />
            </div>

   
            <div className="flex justify-end mt-4">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-20" onClick={handleAuthModalClick}>
                    {buttonText}
                </button>
            </div>
            {showModal && <AuthModal onClose={closeModal} />}
        </div>
    );
};

export default PostInputCard;
