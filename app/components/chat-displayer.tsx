import useChatStore, { IChatMessage } from '@/store/chat.store'
import { Avatar, ScrollShadow } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef } from 'react'

type Props = {}

const ChatDisplayer: React.FC<Props> = () => {
    const { chats } = useChatStore()
    const { data } = useSession()
    
    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [chats]) 

    return (
        <div ref={chatContainerRef} className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-h-[70vh] overflow-auto p-4 scroll-smooth">
            <ScrollShadow className="px-8 flex flex-col gap-y-12">
                {chats.map((chat: IChatMessage, idx: number) => (
                    <div
                        key={idx}
                        className={`flex text-white gap-x-3 w-full items-start ${chat.who === "me" ? "self-end flex-row-reverse" : "self-start"}`}
                    >
                        {chat.who === "CPE-GPT" && <Avatar isBordered src={"https://i.pinimg.com/736x/fe/fa/eb/fefaeb5a9a40a6757ced3e5c5fad84a1.jpg"} size="sm" />}
                        <div className={`w-fit px-2 max-w-[80%] ${chat.who === "me" && "bg-gray-700 p-2"} rounded-lg`}>
                            <p>{chat.message}</p>
                        </div>
                    </div>
                ))}
            </ScrollShadow>
        </div>
    )
}

export default ChatDisplayer
