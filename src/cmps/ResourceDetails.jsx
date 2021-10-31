import { ActionsMenu } from "./resource-details-cmps/ActionsMenu"
import { ResourceHeader } from "./resource-details-cmps/ResourceHeader"
import { ResourceInfo } from "./resource-details-cmps/ResourceInfo"

export const ResourceDetails = ({ resource }) => {
    return (
        <section className="resource-details flex align-center justify-center">
            {resource &&
                <div className="details-container flex column">
                    <ResourceHeader name={resource.name} description={resource.description} />
                    <div className="details-body flex">
                        <ResourceInfo resourceInfo={
                            {
                                name: resource.name,
                                description: resource.description,
                                'resource type': resource.resourceType,
                                path: resource.path
                            }} />
                        <div className="vertical-line"></div>
                        <ActionsMenu actionIds={resource.actionIds} />
                    </div>
                </div>
            }
        </section>
    )
}