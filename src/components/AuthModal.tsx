import React, { useState } from 'react';

interface AuthModalProps {
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleView = () => {
        setIsSignUp(!isSignUp);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-[#27292D] p-8 rounded-lg w-full max-w-lg border-2 border-[#969696]">
                <button
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#131319] text-white text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {isSignUp ? (
                    <div>
                        <h5 className="mb-1 text-[#6B6C70]">SIGN UP</h5>
                        <h6 className="mb-4 text-white font-semibold">Create an account to continue</h6>
                        <label className="block text-sm text-[#C5C7CA] mb-3 text-left">Email</label>
                        <input type="email" placeholder="Email" className="w-full mb-2 p-3 border rounded bg-[#35373B] border-[#7F8084] text-white" />
                        <label className="block text-sm text-[#C5C7CA] mb-3 text-left">Username</label>
                        <input type="text" placeholder="Username" className="w-full mb-2 p-3 border rounded bg-[#35373B] border-[#7F8084] text-white" />
                        <label className="block text-sm text-[#C5C7CA] mb-3 text-left">Password</label>
                        <div className="relative mb-2">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full p-3 border rounded bg-[#35373B] border-[#7F8084] pr-10 text-white"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <i className="fa-solid fa-eye text-gray-600"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash text-gray-600"></i>
                                )}
                            </button>
                        </div>
                        <button className="w-full p-3 bg-blue-500 text-white rounded mt-3">Continue</button>
                        <p className="mt-4 text-left text-[#7F8084] cursor-pointer">Already have an account? <span className='text-[#C5C7CA]' onClick={toggleView}>Login →</span></p>
                    </div>
                ) : (
                    <div>
                        <h5 className="mb-1 text-[#6B6C70]">WELCOME BACK</h5>
                        <h6 className="mb-4 text-white font-semibold">Log into your account</h6>
                        <label className="block text-sm text-[#C5C7CA] mb-3 text-left">Email or Username</label>
                        <input type="text" placeholder="Enter your email or username" className="w-full mb-2 p-3 border rounded bg-[#35373B] border-[#7F8084] text-white" />
                        <label className="block text-sm text-[#C5C7CA] mb-3 text-left">Password</label>
                        <div className="relative mb-2">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full p-3 border rounded bg-[#35373B] border-[#7F8084] pr-10 text-white"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <i className="fa-solid fa-eye text-gray-600"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash text-gray-600"></i>
                                )}
                            </button>
                        </div>
                        <button className="w-full p-3 bg-blue-500 text-white rounded mt-3">Login now</button>

                        <p className="mt-4 text-left text-[#7F8084] cursor-pointer">Not registered yet? <span className='text-[#C5C7CA]' onClick={toggleView}>Register →</span></p>

                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
