import PropTypes from 'prop-types';
import { StatList, StatItem,Label,Percentage,StatisticsItem } from "./Statistics.styled";


export const Stastistics = ({ title, stats }) => {
    return (
        <StatisticsItem>
            {title && <h2>{title}</h2>}
        <StatList>
            {stats.map( ({id,label,percentage}) => (
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}