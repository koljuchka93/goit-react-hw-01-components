import PropTypes from 'prop-types';
import { StatisticsItem, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ element : { label, percentage }}) => {
    return (
        <StatisticsItem class="statisticsItem">
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
        </StatisticsItem>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}