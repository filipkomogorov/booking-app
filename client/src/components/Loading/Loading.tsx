import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'

interface LoadingProps {
    isLoading: boolean
}

const Loading:React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <div className='flex justify-center my-sizeDoubleXl'>
        <BounceLoader color='#E4002B' size={150} loading={isLoading}/>
    </div>
  )
}

export default Loading