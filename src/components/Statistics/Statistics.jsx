import PropTypes from 'prop-types';
import { StatList, StatItem,Label,Percentage,StatisticsItem } from "./Statistics.styled";


export const Stastistics = ({ data }) => {
    return (
        <StatisticsItem>Upload Title
        <StatList>
            {data.map( element => (
                <StatItem key={element.id}>
                    <Label>{element.label}</Label>
                    <Percentage>{element.percentage}%</Percentage>
                </StatItem>
            ))}
        </StatList>
        </StatisticsItem>
    )
}

Stastistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}