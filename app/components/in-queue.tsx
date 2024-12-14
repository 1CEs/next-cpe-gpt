import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import React from 'react'
import { IconParkOutlineTime } from './icon'
import { Session } from 'next-auth'
import Image from 'next/image'

type InQueueProps = Partial<Session>

const InQueue:React.FC<InQueueProps> = ({ user }) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Card>
        <CardHeader className='bg-warning flex justify-center p-6'>
          <IconParkOutlineTime color='white' width={75} height={75} />
        </CardHeader>
        <CardBody className='pt-12 px-6 pb-6 flex justify-center items-center gap-y-3'>
          <h1 className='text-4xl font-bold text-center'>In-Queue Validation</h1>
          <p className='text-xl w-2/3 text-center'>Please wait while we grant your account permission to access our service.</p>
          <div className='flex items-center gap-x-3 p-3 bg-slate-200 rounded-xl'>
            <Image className='rounded-full' width={30} height={30} src={user?.image as string} alt='profile image' />
            <span className='font-bold'>{ user?.name }</span>
          </div>
        </CardBody>
        <CardFooter className='flex justify-center p-6'>
          <Button as={Link} href='/' color='warning' className='text-white' size='lg'>Go back</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default InQueue