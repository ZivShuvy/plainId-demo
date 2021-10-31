import Logo from '../assets/img/logo.png'
export const AppHeader = () => {
    return (
        <header className="app-header flex align-center">
            <img src={Logo} alt="plainID-logo"/>
            <span>PlainID- Demo App</span>
        </header>
    )
}