import React from 'react'
import { ArcticonsOpenaiChatgpt } from './icon'

const Logo = () => {
    return (
        <div className="flex gap-x-3 text-white text-6xl items-center font-thin">
            <span>CPE</span>
            <ArcticonsOpenaiChatgpt className="animate-pulse" color="#fff" width={150} height={150} />
            <span>GPT</span>
        </div>
    )
}

export default Logo