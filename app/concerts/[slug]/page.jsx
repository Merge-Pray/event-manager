"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const {slug} = useParams()
  return (
    <div>i wanna see more</div>
  )
}

export default page;