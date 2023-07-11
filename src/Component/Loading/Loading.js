import React from 'react'
import './Loading.css'
import { Line, Circle } from 'rc-progress';

export default function Loading() {
    return (
        <>
            <div className='rugs'>
                <h2 className='admin'>abdou mostafa<sup className='s'>TM</sup></h2>
            </div>
            <div className="spinner-container">
                <Line percent={70} strokeWidth={1} strokeColor="#B93C3C" className='loading-spinner' />

            </div>
        </>
    )
}
