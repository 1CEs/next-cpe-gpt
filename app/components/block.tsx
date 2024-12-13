import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import React from 'react'
import { FluentEmojiHighContrastCrossMark } from './icon'

type Props = {}

const Block = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Card>
        <CardHeader className='bg-danger flex justify-center p-6'>
          <FluentEmojiHighContrastCrossMark color='white' width={75} height={75} />
        </CardHeader>
        <CardBody className='p-12 flex justify-center items-center gap-y-3'>
          <h1 className='text-4xl font-bold text-center'>Authentication Error!</h1>
          <p className='text-xl w-2/3 text-center'>Your session have been blocked, Please use RMUTI education email to authenticate our service.</p>
        </CardBody>
        <CardFooter className='flex justify-center p-6'>
          <Button as={Link} href='/' color='danger' size='lg'>Go back</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Block