import React from 'react'
import { ArcticonsOpenaiChatgpt } from './icon'

type LogoProps = {
    width: number
    height: number
    textSize: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
}

const Logo:React.FC<LogoProps> = ({ width, height, textSize }) => {
    const tz = {
        "1": "text-xl",
        "2": "text-2xl",
        "3": "text-3xl",
        "4": "text-4xl",
        "5": "text-5xl",
        "6": "text-6xl",
        "7": "text-7xl",
        "8": "text-8xl",
        "9": "text-9xl",
    }
    return (
        <div className={`flex gap-x-3 text-white ${tz[textSize]} items-center font-thin`}>
            <span>CPE</span>
            <ArcticonsOpenaiChatgpt className="animate-pulse" color="#fff" width={width} height={height} />
            <span>GPT</span>
        </div>
    )
}

export default Logo