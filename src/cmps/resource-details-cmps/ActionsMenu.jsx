import { useEffect, useState } from 'react';
import { ReactComponent as HelpIcon } from '../../assets/svg/help.svg';
import { actionService } from '../../services/action.service';
export const ActionsMenu = ({ actionIds }) => {
    const [actions, setActions] = useState([])
    useEffect(() => {
        async function loadActions() {
            try {
                const actions = await Promise.all(actionIds.map(actionId => (
                    actionService.getById(actionId)
                )))
                setActions(actions)
            } catch (err) {
                console.log(err);
            }
        }
        loadActions()
    }, [actionIds])

    return (
        <div className="actions-menu">
            <div className="actions-header">
                <div className="info-header flex align-center">
                    <h1>Permitted actions</h1>
                    <HelpIcon />
                </div>
            </div>
            <div className="actions-body flex column">
                {actions.map(action => (
                    <p className="action" key={action.id}>{action.name}</p>
                ))}
            </div>
        </div>
    )
}