import { DebounceInput } from 'react-debounce-input';
import { ResourceList } from './ResourceList';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as CloseIcon } from '../assets/svg/close-icon.svg';

export const AppMenu = ({ isOpen, onToggleMenu, resources, filterBy, onSetFilter, selectedResourceId, setSelectedResource }) => {
    return (
        <section className={`app-menu${isOpen ? ' open' : ''}`}>
            <div className="menu-header">
                <CloseIcon className="close-menu" onClick={onToggleMenu} />
                <h1>My Resources</h1>
                <div className="search-container flex">
                    <DebounceInput
                        debounceTimeout={300}
                        type="text"
                        placeholder="Search Resource"
                        value={filterBy.name}
                        onChange={({ target }) => onSetFilter(target.value)}
                    />
                    <SearchIcon />
                </div>
            </div>
            <div className="menu-body">
                <ResourceList resources={resources} selectedResourceId={selectedResourceId} setSelectedResource={setSelectedResource} />
            </div>
        </section>
    )
}