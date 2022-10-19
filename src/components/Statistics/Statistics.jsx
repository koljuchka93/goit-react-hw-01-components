import PropTypes from 'prop-types';
import { StatList, StatItem,Label,Percentage,StatisticsItem } from "./Statistics.styled";


export const Stastistics = ({ data }) => {
    return (
        <StatisticsItem>Upload Title
        <StatList>
            {data.map( ({id,label,percentage}) => (
                <StatItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatItem>
            ))}
        </StatList>
        </StatisticsItem>
    )
}

Stastistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}