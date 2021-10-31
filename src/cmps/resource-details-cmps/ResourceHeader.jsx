export const ResourceHeader = ({ name, description }) => {
    return (
        <div className="resource-header flex column">
            <span>{name}</span>
            <p>{description}</p>
        </div>
    )
}