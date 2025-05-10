import React from 'react'
import { Skilled } from './Skills'

export const SkillSection = () => {

    const Skills = [
        { skill: "HTML", percent: 90},
        { skill: "CSS", percent: 80 },
        { skill: "JavaScript", percent: 60 },
        { skill: "jQuery", percent: 80 },
        { skill: "React", percent: 70 },
        {skill: "Tailwind" , percent:90},
    ];

    return (
        <>
            <section className='skill-section my-15'>
                <h1 className='skill-title mb-15 text-center text-[30px] font-bold'>MY SKILLS</h1>
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

