import React from 'react'

export default function FilhosComProps(props){
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {...props})
    })
}