import SquareCard from '../SquareCard';
import { FactsSection } from './styles';
import data from './constants';

const Facts = () => {
    return (
        <FactsSection id='facts'>
            <h2 className='section-title'>About me</h2>
            <div>
                {data.map(({ fact, about, color }) => (
                    <SquareCard key={about} fact={fact} about={about} color={color} />
                ))}
            </div>
        </FactsSection>
    );
};

export default Facts;
