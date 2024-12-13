"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import Block from '../components/block'
import InQueue from '../components/in-queue'
import Logo from '../components/logo'

const GuardPage: React.FC = () => {
    const session = useSession()

    if (session.status == "authenticated") {
        const isRMUTIEmail = session.data.user?.email?.endsWith("@rmuti.ac.th")
        if (isRMUTIEmail) {
            return <InQueue />
        } else {
            return <Block />
        }
    } else if (session.status == "unauthenticated") {
        return <Block />
    } else {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <Logo />
            </div>
        )

    }
}

export default GuardPage