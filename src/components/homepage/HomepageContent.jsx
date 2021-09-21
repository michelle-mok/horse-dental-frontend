import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { dentalAppContext } from '../../store';
// import { DateTime } from 'luxon';

function HomepageContent({ ownersHorses }) {
    const { store, dispatch } = useContext(dentalAppContext);
    console.log('owners hoeses', ownersHorses);

    const { selectedOwner } = store;
    return (
        <>
        {selectedOwner && (
        <div className="homepage-content">
            <div className="homepage-content-owner">
                <div>                
                    <h4>{selectedOwner.last_name}, {selectedOwner.first_name}</h4>
                    <h6>{selectedOwner.address}</h6>
                    <h6>{selectedOwner.email}</h6>
                    <h6>{selectedOwner.phone_number}</h6>
                    <h6>GST: {selectedOwner.gst ? 'yes' : 'no'}</h6>
                </div>
            </div>
            {ownersHorses && (
                <div className="homepage-content-horses">
                    {ownersHorses.map((horse, index) => {
                        return (
                            <Accordion>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{horse.name}, {horse.mra_number}</Accordion.Header>
                                    <Accordion.Body>
                                        Next treatment date: {horse.next_treatment_date}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
            </div>
            )}
        </div>
        )}
        </>
    )
}

export default HomepageContent
