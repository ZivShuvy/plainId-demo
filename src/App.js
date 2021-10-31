import { useEffect, useState } from "react";
import { resourceService } from './services/resource.service'
import { AppHeader } from "./cmps/AppHeader"
import { AppMenu } from "./cmps/AppMenu";
import { ResourceDetails } from "./cmps/ResourceDetails";
import { ReactComponent as MenuIcon } from './assets/svg/menu.svg'


function App() {
  const [resources, setResources] = useState([])
  const [filterBy, setFilterBy] = useState({ name: '' }) // Filter may contain more fields in the future...
  const [selectedResource, setSelectedResource] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(() => {
    async function loadResources() {
      try {
        const resources = await resourceService.query(filterBy)
        setResources(resources)
      } catch (err) {
        console.log(err);
      }
    }
    loadResources()
  }, [filterBy])

  const onSetFilter = (name) => {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, name }))
  }

  const onToggleMenu = () => {
    setIsMenuOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <div className="app flex column">
      <AppHeader />
      <div className="app-main flex">
        <button className="open-menu-btn flex align-center justify-center" onClick={onToggleMenu}>Show menu <MenuIcon /></button>
        <div className={`screen${isMenuOpen ? ' open' : ''}`} onClick={onToggleMenu}></div>
        <AppMenu
          isOpen={isMenuOpen}
          onToggleMenu={onToggleMenu}
          resources={resources}
          filterBy={filterBy}
          onSetFilter={onSetFilter}
          selectedResourceId={selectedResource?.id}
          setSelectedResource={setSelectedResource} />
        <ResourceDetails resource={selectedResource} />
      </div>
    </div>
  );
}

export default App;
