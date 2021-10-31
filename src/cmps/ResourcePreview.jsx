import { ReactComponent as ActiveIcon } from '../assets/svg/active.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/arrow-right.svg';

export const ResourcePreview = ({ resource, selectedResourceId, setSelectedResource }) => {
    return (
        <li
            className={`resource-preview flex${resource.id === selectedResourceId ? ' active' : ''}`}
            onClick={() => setSelectedResource(resource)}>
            <div className="flex align-center">
                <ActiveIcon />
                <span>{resource.name}</span>
            </div>
            <ArrowRightIcon className="arrow-right-icon" />
        </li>
    )
}