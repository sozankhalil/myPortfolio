import './WorkCardStyles.css'
import React from 'react'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>PROJECTS </h1>
            <div className='project-container'>
                {WorkCardData.map((value) => {
                    return (<WorkCard
                        key={value.id}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        source={value.source}

                    />)
                })}


            </div>
        </div>
    )
}

export default Work