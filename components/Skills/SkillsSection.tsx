import React from 'react';
import { RectangleCardWrapper } from '../RectangleCard/styles';
import { SkillsSectionStyled } from './styles';

export interface IProps {
    title: string;
    handleHover: (e: any) => void;
    fade: boolean;
    skills: {
        name: string
    }[]
}

const SkillsSection: React.FC<IProps> = ({ title, handleHover, fade, skills }) => {
    return (
        <SkillsSectionStyled fade={fade} onMouseOver={(e) => handleHover(title)} onMouseLeave={() => handleHover('')}>
            <h1 className='title'>{title}</h1>

            <div className='skills'>
                        {skills.map((skill) => (
                            <small key={skill.name} className='skill'>
                                {skill.name}
                            </small>
                        ))}
                    </div>
        </SkillsSectionStyled>
    );
};

export default SkillsSection;
