function getDate(){
    const currentDate = new Date()
    const currentDateInISO = currentDate.toISOString()
    return currentDateInISO
}

export default getDate