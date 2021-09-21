import React, { useState, useEffect } from 'react'
import { getOwners } from '../../store'
import HomepageSidebar from './HomepageSidebar';
import './Homepage.css';
import HomepageContent from './HomepageContent';

function Homepage() {
    const [owners, setOwners] = useState();
    const [ownersHorses, setOwnersHorses] = useState();

     useEffect(() => {
        getOwners(setOwners);
    }, []);

    return (
        <div className="homepage-container">
            <HomepageSidebar owners={owners} setOwnersHorses={setOwnersHorses} />
            <HomepageContent ownersHorses={ownersHorses} />
        </div>
    )
}

export default Homepage
