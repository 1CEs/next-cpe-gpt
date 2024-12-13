import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import React from 'react'
import { IconParkOutlineTime } from './icon'

type Props = {}

const InQueue = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Card>
        <CardHeader className='bg-warning flex justify-center p-6'>
          <IconParkOutlineTime color='white' width={75} height={75} />
        </CardHeader>
        <CardBody className='p-12 flex justify-center items-center gap-y-3'>
          <h1 className='text-4xl font-bold text-center'>In-Queue Validation</h1>
          <p className='text-xl w-2/3 text-center'>Please wait while we grant your account permission to access our service.</p>
        </CardBody>
        <CardFooter className='flex justify-center p-6'>
          <Button as={Link} href='/' color='warning' className='text-white' size='lg'>Go back</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default InQueue