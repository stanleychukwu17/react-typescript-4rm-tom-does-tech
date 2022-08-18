import React from 'react'

interface boxProps {
    children: React.ReactNode
}

export default function Box({children}: boxProps) {
    return (
        <div>{children}</div>
    )
}

/**
1. So what if we wanted to pass inline styling to the Box component
explanation: so when destructuring the props of Box1, we destructured 'children' separately and then destructured the remaining items into an object called rest
*/
export function Box1({children, ...rest}: boxProps & React.CSSProperties) {
    return (
        <div style={rest}> {children} </div>
    )
}

/**
1. A component that can take in attributes and properties of a button element
with the addition of 'React.ButtonHTMLAttributes<HTMLButtonElement>', we can now add all the attributes of button element like (onClick, onBlur, onDoubleClick e.t.c)
*/
type buttonProps = {
    children: React.ReactNode
    styles?: React.CSSProperties
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, styles, ...rest}: buttonProps) {
    return (
        <button {...rest} style={styles}> {children} </button>
    )
}

// or my own simple version
type buttonProps_2 = {
    children: React.ReactNode
    styles?: React.CSSProperties
} & React.ComponentProps<React.ElementType>

export function Button2({children, styles, ...rest}: buttonProps_2) {
    return (
        <button {...rest} style={styles}> {children} </button>
    )
}