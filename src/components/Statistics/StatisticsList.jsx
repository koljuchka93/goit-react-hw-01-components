import { StatList, StatItem,Label,Percentage,StatisticsItem } from "./Statistics.styled";


export const StastisticsList = ({ data }) => {
    return (
        <StatisticsItem>
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