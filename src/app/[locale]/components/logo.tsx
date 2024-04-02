import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="grid row-start-4 p-1"
    ><Button variant='menu'><Image src={"/logoMini.png"} alt='logo' width={150} height={150}/> </Button></div>
  )
}

export default Logo