"use client"

import { Button } from '@nextui-org/react'
import React, { useRef } from 'react'
import { RiImageAddLine, TeenyiconsSendSolid } from './icon'

type Props = {}

const MessageBox = (props: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

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
                    ref={textareaRef}
                    className='p-3 rounded-lg bg-transparent resize-none min-h-12 h-12 max-h-36 text-white outline-none border-none overflow-auto'
                    placeholder='Message CPE-GPT'
                    onInput={adjustHeight}
                    style={{ maxHeight: '16rem', overflowY: 'auto' }}
                />
                <div className='flex justify-between items-center'>
                    <Button variant='light' className='text-white' isIconOnly>
                        <RiImageAddLine />
                    </Button>
                    <Button variant='light' className='text-white' isIconOnly>
                        <TeenyiconsSendSolid width={20} height={20} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
