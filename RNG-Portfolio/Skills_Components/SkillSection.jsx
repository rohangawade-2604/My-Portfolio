import React from 'react'
import { Skilled } from './Skills'

export const SkillSection = () => {

    const Skills = [
        { skill: "HTML", percent: 40},
        { skill: "JavaScript", percent: 89 },
        { skill: "CSS", percent: 30 },
        { skill: "jQuery", percent: 70 },
        { skill: "React", percent: 45 },
        {skill: "Tailwind" , percent:70},
    ];

    return (
        <>
            <section className='skill-section'>
                <h1 className='skill-title'>My Skills</h1>
                <div className='skill-grid grid grid-cols-3'>
                    {
                        Skills.map(({skill, percent}) =>(
                            <Skilled key={skill} skill={skill} percent={percent}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

