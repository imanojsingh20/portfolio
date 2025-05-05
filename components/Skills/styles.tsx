import styled from 'styled-components';
import { RectangleCardWrapper } from '../RectangleCard/styles';

export const ProjectSection = styled.section``;
export const SkillsSectionStyled = styled(RectangleCardWrapper)`

    .skills {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        
    }
    .skill {
        border-bottom: 1px solid #706b6b;
        color: #ffffff;
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 5px 5px #202020; 
        font-weight: bold;
    }
`
