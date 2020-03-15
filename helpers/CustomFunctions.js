const moment = require('moment');

export const setCalendarDate = (mapData, week = [], dateFrom = '', dateTo = '') => {
    let isSelected = false;
    let formattedData = [];
    const data = mapData.map( day => {
            const date = moment(day.date);
            const weekFilter = (week.length > 0 && !week.includes(date.format('dddd'))) ? false : true;
            
            if ( weekFilter && (dateFrom != '' && dateTo == '') && date.isSameOrAfter(dateFrom) ) {
                isSelected = true;
            } else if ( weekFilter && (dateFrom == '' && dateTo != '') && date.isSameOrBefore(dateTo) ) {
                isSelected = true;
            } else if ( weekFilter && (dateFrom != '' && dateTo != '') && (date.isSameOrAfter(dateFrom) && date.isSameOrBefore(dateTo)) ) {
                isSelected = true;
            }
            day = {
                ...day,
                date: date.format('YYYY-MM-DD'),
                isSelected,
            };

            if(isSelected) formattedData.push(day.date);
            isSelected = false;
            return day;
    });
    return {
        data,
        formattedData,
    }
}