"use client"

import React from 'react'
import MessageBox from '../components/message-box'
import useChatStore from '@/store/chat.store'
import ChatDisplayer from '../components/chat-displayer'

type Props = {}

const OverviewPage = (props: Props) => {

    const suggestionMessage = [
        "What is AI?",
        "How can I reset my password?",
        "Tell me a joke",
        "Explain React in simple terms",
        "Use client",
        "What can you do for me?"
    ]

    const { chats } = useChatStore()

    return (
        <div className="flex flex-col items-center w-full md:p-4 sm:p-2">
            {chats.length === 0 ? (
                <div className="flex flex-col justify-center items-center w-full h-full translate-y-32 text-center text-white text-3xl sm:text-2xl md:text-4xl">
                    <span>What can I help with?</span>
                    <div className="flex flex-wrap justify-center mt-4 space-x-2 text-base sm:text-sm md:text-lg">
                        {suggestionMessage.map((message: string, idx: number) => (
                            <div
                                key={idx}
                                className="text-gray-300 p-2 rounded-xl text-sm bg-slate-700 hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                {message}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <ChatDisplayer />
            )}
            <MessageBox />
        </div>
    )
}

export default OverviewPage
