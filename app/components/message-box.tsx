"use client"

import { Button } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { IcomoonFreeBin, RiImageAddLine, TeenyiconsSendSolid } from './icon'
import useUserStore from '@/store/user.store'
import { ChatRequest } from '@/types'
import useChatStore from '@/store/chat.store'

type Props = {}

const MessageBox = (props: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [messages, setMessages] = useState<string>("")
    const { addChat, clearChats } = useChatStore()
    const { user } = useUserStore()

    const sendMessage = async () => {
        try {
            // const res = await fetch("/api/chat", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         model: "gpt-3.5-turbo",
            //         email: user?.email,
            //         messages: {
            //             role: "user",
            //             content: messages
            //         },
            //     } as ChatRequest),
            // })
            addChat({ who: "me", message: messages })
            addChat({ who: "CPE-GPT", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto eos odio, veritatis natus fuga non quis culpa fugiat laudantium? Commodi error enim omnis placeat, rerum minus voluptates tempore explicabo!" })
            setMessages("")
            // const data = await res.json()
        } catch (error) {
            console.log(error)
        }
    }

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }

    return (
        <div className='fixed bottom-20 left-0 w-full flex justify-center z-10 p-4'>
            <div className='flex flex-col w-1/3 p-2 rounded-xl gap-y-3 bg-gray-800'>
                <textarea
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                    ref={textareaRef}
                    className='p-3 rounded-lg bg-transparent resize-none min-h-12 h-12 max-h-36 text-white outline-none border-none overflow-auto'
                    placeholder='Message CPE-GPT'
                    onInput={adjustHeight}
                    style={{ maxHeight: '16rem', overflowY: 'auto' }}
                />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-2'>
                        <Button variant='light' className='text-white' isIconOnly>
                            <RiImageAddLine />
                        </Button>
                        <Button variant='light' onPress={clearChats} className='text-white' isIconOnly>
                            <IcomoonFreeBin />
                        </Button>
                    </div>

                    <Button variant='light' onPress={sendMessage} className='text-white' isIconOnly>
                        <TeenyiconsSendSolid width={20} height={20} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
