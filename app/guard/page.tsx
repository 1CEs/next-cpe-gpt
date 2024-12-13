'use client'

import { useSession } from 'next-auth/react'
import React, { JSX, useEffect, useState } from 'react'
import Block from '../components/block'
import InQueue from '../components/in-queue'
import Logo from '../components/logo'

const GuardPage: React.FC = () => {
    const { data: session, status } = useSession()
    const [content, setContent] = useState<JSX.Element | null>(null)

    useEffect(() => {
        const handleAuthentication = async () => {
            if (status === 'authenticated') {
                const isRMUTIEmail = session?.user?.email?.endsWith('@rmuti.ac.th')
                if (isRMUTIEmail) {
                    try {
                        const res = await fetch('/api/pending', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email: session.user?.email,
                                name: session.user?.name,
                                image: session.user?.image,
                            }),
                        })

                        if (!res.ok) {
                            console.error(
                                'Error while sending data to /api/pending:',
                                await res.text()
                            )
                        }

                        setContent(<InQueue />)
                    } catch (error) {
                        console.error('Error:', error)
                    }
                } else {
                    setContent(<Block />)
                }
            } else if (status === 'unauthenticated') {
                setContent(<Block />)
            } else {
                setContent(
                    <div className="w-full h-full flex justify-center items-center">
                        <Logo />
                    </div>
                )
            }
        }

        handleAuthentication()
    }, [session, status])

    return content || null
}

export default GuardPage
