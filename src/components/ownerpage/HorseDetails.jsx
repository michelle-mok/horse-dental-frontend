import React from 'react';
import { DateTime } from 'luxon';

function HorseDetails({ horse }) {
const today = DateTime.now();

const futureApptArray = [];
let lastAppt;
console.log(futureApptArray);
// getting all future appointments for one horse
const apptArray = horse.appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(apptArray);
for (let i = 0; i < apptArray.length; i += 1) {
    const appointmentDate = DateTime.fromISO(apptArray[i].date);
    if (appointmentDate >= today) {
        futureApptArray.push(appointmentDate.toFormat('dd-MM-yyyy'));
    } else if (i === 0) {
        lastAppt = DateTime.fromISO(apptArray[i].date).toFormat('dd-MM-yyyy');
    }
}

console.log('last appt', lastAppt);
    return (
        <div className="row horse-profile-row">
            <div className="col-12 col-md-6 horse-profile-col">
                <img alt="horse" src={horse.photo} />
            </div>
            <div className="col-12 col-md-6 horse-profile-col">
                <h5>{horse.name.toUpperCase()}</h5>
                <br></br>
                {horse.mraNumber && (
                    <h6>MRA number: {horse.mraNumber}</h6>
                )}
                <h6>Location: {horse.location}</h6>
                {lastAppt && (
                    <h6>Last appointment: {lastAppt}</h6>
                )
                 }
                {futureApptArray.length > 0 ? 
                    futureApptArray.map((appt) => {
                        return (
                            <>
                                <h6>Next treatment date(s):</h6>
                                <h6>{appt}</h6>
                            </>
                        )
                    })
                 : 
                <h6>Next treatment: No appointment made</h6>
                 }
                {horse.warnings && (
                    <h6 className="warning">{horse.warnings}</h6>
                )}
                {horse.problems && (
                    <h6 className="problem">{horse.problems}</h6>
                )}
            </div>
        </div>
    )
}

export default HorseDetails
