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
        <div className='flex justify-center w-full'>
            {chats.length == 0 &&
                <div className='flex gap-y-3 flex-col w-full h-full translate-y-72 justify-center items-center text-white text-4xl'>
                    <span>What can i help with?</span>
                    <div className="flex flex-wrap items-center mt-4 space-x-2 text-lg">
                        {suggestionMessage.map((message: string, idx: number) => (
                            <div key={idx} className="text-gray-300 p-2 rounded-xl text-sm bg-slate-700 hover:text-white cursor-pointer">
                                {message}
                            </div>
                        ))}
                    </div>
                </div>
            }
            { chats.length > 0 && <ChatDisplayer />}
            <MessageBox />
        </div>
    )
}

export default OverviewPage