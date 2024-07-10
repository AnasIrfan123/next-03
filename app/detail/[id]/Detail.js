'use client'
import Image from 'next/image'
import { useState } from 'react'

export default async function Detail(props) {
    const { data } = props
    return <div>
        <h1>Detail</h1>

        <h2 className={`mb-3 text-2xl font-semibold`}>
            {data.title}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
        <Image
            className="h-30 w-30 max-w-none max-h-none"
            src={data.thumbnail} width="100" height="100" />
        <h3>{data.price}</h3>
    </div>
}