import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function CalendarDayCell({cellData}) {
    useEffect(() => {
    }, []);


    switch(cellData["status"]) {
        case "disabled":
            return (
                <p className="calendar__day__cell disabled"></p>
            )
        case "full":
            return (
                <p className="calendar__day__cell full">Créneau saturé</p>
            ) 
        case "notFull":
            return (
                <p className="calendar__day__cell not_full">
                    <Link className="calendar__day__link" to={"/rdv/" + cellData["date"] + "/" + cellData["hour"]}>Prendre rendez-vous</Link>
                </p>
            )
    }
}

export default CalendarDayCell
