import React from 'react'

const Title = ({title, color, ish1}) => {
    return (
        <>
            {
                ish1 ?
                    <h1 className={`text-5xl font-semibold m-0 ${color}`} dangerouslySetInnerHTML={{__html : title}}/>
                    :
                    <h2 className={`text-5xl font-semibold m-0 ${color}`} dangerouslySetInnerHTML={{__html : title}}/>
            }
        </>
    )
}

export default Title
