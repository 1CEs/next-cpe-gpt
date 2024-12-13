"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import Block from '../components/block'

const GuardPage: React.FC = () => {
    const session = useSession()
    if (session.status == "authenticated") {
        const isRMUTIEmail = session.data.user?.email?.endsWith("@rmuti.ac.th")
        if (isRMUTIEmail) {
            return (
                <div>GuardPage</div>
            )
        } else {
            return <Block />
        }
    } else return <Block />
}

export default GuardPage