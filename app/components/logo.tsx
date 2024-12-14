import React from 'react'
import { ArcticonsOpenaiChatgpt } from './icon'

type LogoProps = {
    width: number
    height: number
    textSize: string
}

const Logo:React.FC<LogoProps> = ({ width, height, textSize }) => {
    const tz = "text-"+textSize + "xl"
    return (
        <div className={`flex gap-x-3 text-white ${tz} items-center font-thin`}>
            <span>CPE</span>
            <ArcticonsOpenaiChatgpt className="animate-pulse" color="#fff" width={width} height={height} />
            <span>GPT</span>
        </div>
    )
}

export default Logo