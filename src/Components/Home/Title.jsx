import React from 'react'

export default function Title({title} ) {
  return (
    <>
    <div class="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">

        <span class="relative flex h-2 w-2">

            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        
        <span class="text-sm font-medium text-neutral-300">
          {title}
        </span>
    </div>
    
    </>
  )
}
