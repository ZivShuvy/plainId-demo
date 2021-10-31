export const ResourceField = ({ label, value }) => {
    return (
        <div className="resource-field flex column">
            <span>{label}</span>
            <p>{value}</p>
        </div>
    )
}