import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import CalendarDayCell from './CalendarDayCell'

dayjs.locale("fr")

function CalendarDayTitle({dayOfWeek, dayOfMonth, monthName}) {
    return <div className="calendar__day__title">{dayOfWeek} {dayOfMonth} {monthName}</div>
}

function CalendarDay({calendarDayData}) {
    const [dayOfWeek, setDayOfWeek] = useState()
    const [dayOfMonth, setDayOfMonth] = useState()
    const [monthName, setMonthName] = useState()
    const [cellsData, setCellsData] = useState([])

    let maxCreneaux = 2
    let horaires = null
    let synthese = null

    useEffect(() => {
        let calendarHeader = (calendarDayData["calendarHeader"])
        setDayOfWeek(calendarHeader["dayOfWeek"])
        setDayOfMonth(calendarHeader["dayOfMonth"])
        setMonthName(calendarHeader["monthName"])
        let horaires = (calendarDayData["horaires"])
        let synthese = (calendarDayData["synthese"])

        let hourStart = null
        let hourStop = null
        let hourStartMin = 18
        let hourStopMax = 8
        calendarDayData["horaires"].map((horairesThisDay) => {
            if(horairesThisDay["jour"] == calendarHeader["dayOfWeek"]) {
                hourStart = horairesThisDay["start"]
                hourStop = horairesThisDay["stop"]
            }
            if(horairesThisDay["start"] !== null) {
                hourStartMin = Math.min(hourStartMin, horairesThisDay["start"])
            }
            if(horairesThisDay["stop"] != null) {
                hourStopMax = Math.max(hourStopMax, horairesThisDay["stop"])
            }
        })
        let allData = []

        for(let hour = hourStartMin; hour < hourStart; hour+= 2) {
            let date = calendarHeader["fulldate"]
            let cellStatus="disabled"
            allData.push({"status": cellStatus, "date": date, "hour": hour})
        }
        for(let hour = hourStart; hour < hourStop; hour+= 2) {
            let date = calendarHeader["fulldate"]
            let cellStatus="notFull"
            if(date in synthese) {
                if((hour in synthese[date]) && (synthese[date][hour] == maxCreneaux)) {
                    cellStatus = "full"
                }
            }

            allData.push({"status": cellStatus, "date": date, "hour": hour})
        }
        for(let hour = hourStop || hourStopMax; hour < hourStopMax; hour+= 2) {
            let date = calendarHeader["fulldate"]
            let cellStatus="disabled"
            allData.push({"status": cellStatus, "date": date, "hour": hour})
        }
        if((hourStart === null) && (hourStop === null)) {
            for(let hour = hourStartMin; hour < hourStopMax; hour+= 2) {
                let date = calendarHeader["fulldate"]
                let cellStatus="disabled"
                allData.push({"status": cellStatus, "date": date, "hour": hour})
            }
        }
        setCellsData(allData)
    }, []);


    return (
        <div className="calendar__day">
            <CalendarDayTitle dayOfWeek={dayOfWeek} dayOfMonth={dayOfMonth} monthName={monthName} />
            <div className="calendar__day__cells">
                {
                    cellsData.map(function(cellData) {
                        return (
                            <CalendarDayCell cellData={cellData} />
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default CalendarDay
