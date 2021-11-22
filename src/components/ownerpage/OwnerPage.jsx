import React, { useState, useEffect } from 'react'
import { getOwners } from '../../store'
import OwnerPageSidebar from './OwnerPageSidebar';
import './OwnerPage.css';
import OwnerPageContent from './OwnerPageContent';

function OwnerPage() {
    const [owners, setOwners] = useState();
    const [ownersHorses, setOwnersHorses] = useState();

    // getting all owners
     useEffect(() => {
        getOwners(setOwners);
    }, []);

    return (
        <div className="homepage-container">
            <OwnerPageSidebar owners={owners} setOwnersHorses={setOwnersHorses} />
            <OwnerPageContent ownersHorses={ownersHorses} />
        </div>
    )
}

export default OwnerPage;
