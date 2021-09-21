import React from 'react';
import Button from 'react-bootstrap/Button';

function AccordionContent({ horse }) {

    return (
        <div className="row horse-profile-row">
            <div className="col-12 col-md-6 horse-profile-col">
                <img alt="horse" src={horse.photo} />
            </div>
            <div className="col-12 col-md-6 horse-profile-col">
                {horse.warnings && (
                    <Button className="warning">{horse.warnings}</Button>
                )}
                <br></br>
                <h4>{horse.name}</h4>
                <h6>{horse.mraNumber}</h6>
            </div>
        </div>
    )
}

export default AccordionContent
