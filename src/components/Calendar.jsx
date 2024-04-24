import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import '../assets/css/components/Calendar.css'
import dayjs from 'dayjs'
import CalendarTitle from './CalendarTitle';
import { apiHoraires, apiSyntheseRdvs } from "../services/Api"
import CalendarDay from './CalendarDay';

function Calendar({nbJours}) {
    let horaires = null
    let synthese = null

    const [calendarDaysData, setCalendarDaysData] = useState([])

    const dayOfWeekNames = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

    dayjs.locale("fr")
    let now = dayjs().format("DD/MM/YYYY HH[h]mm")
    
    useEffect(() => {
        Promise.all([
            apiHoraires().then((data) => {
            horaires = data.data
            }),
            apiSyntheseRdvs().then((data) => {
                synthese = data.data
            })
        ]).then(() => {
            let today = dayjs()
            let fullData = []
            for(let i = 0; i < nbJours; i++) {
                let day = today.add(i+1, "day").startOf("day")
                let dayOfWeek = dayOfWeekNames[day.day()]
                let dayOfMonth = day.date()
                let monthName = monthNames[day.month()]
                fullData.push({
                    "calendarHeader" : {"dayOfWeek": dayOfWeek, "dayOfMonth":dayOfMonth, "monthName":monthName, "fulldate": day.format("YYYY-MM-DD")},
                    "horaires": horaires,
                    "synthese": synthese
                })
                setCalendarDaysData(fullData)
            }
        });
    }, []);



    function CalendarDuration({nbJours}) {
        if(nbJours == 7) {
            return <p className="calendar__duration"><span className="current">7 jours</span> / <Link to="/?nbJours=28">28 jours</Link></p>
        }
        else {
            return <p className="calendar__duration"><Link to="/?nbJours=7">7 jours</Link> / <span className="current">28 jours</span></p>
        }
    }

    return (
        <>
            <div className="calendar">
                {now}
                <div className="calendar__days">
                    {
                        calendarDaysData.map(function(calendarDayData) {
                            return (
                                <CalendarDay calendarDayData={calendarDayData} />
                            )
                        })
                    }                
                </div>
            </div>
        </>
    )
}

export default Calendar
