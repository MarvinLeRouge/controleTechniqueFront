import React from 'react';

function CalendarDayTitle({dayOfWeekName, dayOfMonth, monthName}) {
    return (
        <div className="calendar__day__title">
            {dayOfWeekName} {dayOfMonth} {monthName}
        </div>
    )
}

export default CalendarDayTitle
