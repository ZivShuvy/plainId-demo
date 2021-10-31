import { ResourcePreview } from "./ResourcePreview"

export const ResourceList = ({ resources, selectedResourceId, setSelectedResource }) => {
    return (
        <ul className="resource-list clean-list">
            {resources.map(resource => (
                <ResourcePreview key={resource.id}
                    resource={resource}
                    selectedResourceId={selectedResourceId}
                    setSelectedResource={setSelectedResource} />
            ))}
        </ul>
    )
}