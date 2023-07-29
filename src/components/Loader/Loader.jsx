import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {

    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="rgba(183, 42, 42, 0.951)"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=''
            visible={true}
        />
    )
}

export default Loader