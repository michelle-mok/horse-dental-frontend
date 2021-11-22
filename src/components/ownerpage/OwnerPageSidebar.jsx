import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { getOwner, dentalAppContext, getOwnersHorses } from '../../store';

function OwnerPageSidebar({ owners, setOwnersHorses }) {
    const { dispatch } = useContext(dentalAppContext);

    const handleOwnerClick = (index) => {
        getOwner(dispatch, owners[index]);
        getOwnersHorses(owners[index], setOwnersHorses);
    }

    return (
        <div className="homepage-sidebar">
            <h4>Owners</h4>
            <Nav variant="pills" className="flex-column">
                {owners && (
                    owners.map((owner, index) => {
                        return (
                            <Nav.Link onClick={() => handleOwnerClick(index)} eventKey={index}>{owner.lastName}, {owner.firstName}</Nav.Link>
                        )
                    })
                )}
            </Nav>
        </div>
    )
}

export default OwnerPageSidebar
