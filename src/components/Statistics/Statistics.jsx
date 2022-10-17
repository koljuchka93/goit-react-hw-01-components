import { StatList, StatItem,Label,Percentage,StatisticsItem } from "./Statistics.styled";


export const Stastistics = ({ data }) => {
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

// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//             percentage: PropTypes.number.isRequired
//         })
//     )
// }