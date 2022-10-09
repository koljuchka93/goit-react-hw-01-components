export const Statistics = ({ element : { label, percentage }}) => {
    return (
        <div class="statisticsItem">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
        </div>
    );
};