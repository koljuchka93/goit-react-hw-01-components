import { StatisticsItem, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ element : { label, percentage }}) => {
    return (
        <StatisticsItem class="statisticsItem">
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
        </StatisticsItem>
    );
};