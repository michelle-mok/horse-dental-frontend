import React, { useContext, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { dentalAppContext } from '../../store';
import HorseDetails from './HorseDetails';
// import { DateTime } from 'luxon';

function OwnerPageContent({ownersHorses}) {
    const { store, dispatch } = useContext(dentalAppContext);
    const { selectedOwner} = store;

    return (
        <>
        {selectedOwner && (
        <div className="homepage-content">
            <div className="homepage-content-owner">
                <div>                
                    <h4>{selectedOwner.lastName}, {selectedOwner.firstName}</h4>
                    <h6>{selectedOwner.address}</h6>
                    <h6>{selectedOwner.country}</h6>
                    <h6>{selectedOwner.email}</h6>
                    <h6>{selectedOwner.phoneNumber}</h6>
                    <h6>GST: {selectedOwner.gst ? 'yes' : 'no'}</h6>
                </div>
            </div>
            {ownersHorses && (
                <div className="homepage-content-horses">
                    <Accordion key={1234}>
                    {ownersHorses.map((horse, index) => {
                        return (
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{horse.name}, {horse.mraNumber}</Accordion.Header>
                                <Accordion.Body>
                                    <HorseDetails horse={horse}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                    </Accordion>
                </div>
            )}
        </div>
        )}
        </>
    )
}

export default OwnerPageContent
