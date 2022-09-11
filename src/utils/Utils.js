import moment from "moment";

export const parsingStringToDate = (date) => {
    const today = new Date();

    const time = date.split(':');

    const costomDate = new Date(today.getFullYear(), today.getMonth()+1, today.getDate(), time[0], time[1]);

    return costomDate;
}


export const getDateAfterDuration = (date, duration) => {
    const newDateObj = moment(parsingStringToDate(date)).add(duration, 'm').toDate();
    return newDateObj;
}