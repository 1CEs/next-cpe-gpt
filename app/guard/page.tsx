'use client'

import { useSession } from 'next-auth/react'
import React, { JSX, useEffect, useState } from 'react'
import Block from '../components/block'
import InQueue from '../components/in-queue'
import Logo from '../components/logo'
import { useRouter } from 'next/navigation'
import useUserStore from '@/store/user.store'

const GuardPage: React.FC = () => {
    const { data: session, status } = useSession()
    const [content, setContent] = useState<JSX.Element | null>(null)
    const router = useRouter()
    const { setUser } = useUserStore()

    useEffect(() => {
        const handleAuthentication = async () => {
            if (status === 'authenticated') {
                const isRMUTIEmail = session?.user?.email?.endsWith('@rmuti.ac.th')
                if (isRMUTIEmail) {
                    try {
                        const res = await fetch('/api/user', {
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
                                'Error while sending data to /api/user:',
                                await res.text()
                            )
                        }
                        const data = await res.json()
                        if (data.message == "success") {
                            setUser(data.data)
                            router.push('/overview')
                        } else {
                            setContent(<InQueue user={session.user} />)
                        }
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
                        <Logo width={150} height={150} textSize="6"/>
                    </div>
                )
            }
        }

        handleAuthentication()
    }, [session, status])

    return content || null
}

export default GuardPage
