import React from 'react'
import { ReferenceCard } from '../../ReferenceCard'
import Image from '../../../../assets/adventscalendar.png'

export const AdventscalendarReference = () => {
    return (
        <ReferenceCard
            title='Adventskalender'
            image={Image}
            githubUrl='https://github.com/janhoeck/adventscalendar-v2'
            liveDemoUrl='https://janhoeck.github.io/adventscalendar-v2/#/'
        />
    )
}
