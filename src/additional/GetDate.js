export const getDate = () => {
    const newDate = new Date();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear()
    return day + '.' + (month < 10 ? '0' : '') + month + '.' + year;
}