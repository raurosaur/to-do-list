const convertDate = function (date) {
    return date.split('-').reverse().join('-');
};

const convertTime = function(time) {
    let [hour, min] = time.split(':');
    if(hour > 0 && hour < 12){
        return time + 'AM';
    }
    else{
        hour = hour-12;
        return hour + ':' + min + 'PM';
    }
}

export {convertDate, convertTime};