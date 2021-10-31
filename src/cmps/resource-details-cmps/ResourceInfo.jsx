import { ReactComponent as HelpIcon } from '../../assets/svg/help.svg';
import { ResourceField } from './ResourceField';

export const ResourceInfo = ({ resourceInfo }) => {
    return (
        <div className="resource-info">
            <div className="info-header flex align-center">
                <h1>General Details</h1>
                <HelpIcon />
            </div>
            <div className="info-body flex column">
                {Object.keys(resourceInfo).map((key, idx) => (
                    <ResourceField key={idx} label={key} value={resourceInfo[key]} />
                ))}
            </div>
        </div>
    )
}