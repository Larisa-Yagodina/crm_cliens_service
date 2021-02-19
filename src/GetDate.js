export const getDate = () => {
    const newDate = new Date();
    console.log(newDate.getMonth() + 1)
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear()
    return day + '.' + (month < 10 ? '0' : '') + month + '.' + year;
}