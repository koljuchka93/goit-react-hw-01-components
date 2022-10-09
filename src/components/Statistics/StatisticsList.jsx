import { Statistics } from './Statistics';

export const StastisticsList = ({ data }) => {
    return (
        <ul>
            {data.map( element => (
                <li key={element.id}>
                    <Statistics element={element}/>
                </li>
            ))}
        </ul>
    )
}