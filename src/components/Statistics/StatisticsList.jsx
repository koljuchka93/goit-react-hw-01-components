import { Statistics } from './Statistics';
import { StatList, StatItem } from "./Statistics.styled";


export const StastisticsList = ({ data }) => {
    return (
        <StatList>
            {data.map( element => (
                <StatItem key={element.id}>
                    <Statistics element={element}/>
                </StatItem>
            ))}
        </StatList>
    )
}