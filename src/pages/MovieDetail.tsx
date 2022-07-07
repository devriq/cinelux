import React from 'react'
import { useState } from 'react';

export const MovieDetail = (activeMoviePoster: string) => {

    

  return (
    <div className='border grid place-items-center w-[100vw] h-[50vh]'>
        <div className="poster">
            <img src={activeMoviePoster} alt=''/>
        </div>
        <div className="info">
            <span className='text-3xl font-bold'>Massacre</span>
            <p className="overview leading-relaxed w-full">baasdadashdiausncusadayudbaskjxnasutcvjbxbdabdjaksbdkasbdukankuabuakbdjandjkabdkjabdkjabdakjbdkbjasbdhasbkjdajskndjasnjanda</p>
        </div>
    </div>
  )
}
