import React from 'react'

interface boxProps {
    children: React.ReactNode
}

export default function Box({children}: boxProps) {
  return (
    <div>1-generics</div>
  )
}