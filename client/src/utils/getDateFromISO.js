import { format } from 'date-fns'

const getDateFromISO = (isostring) => {
    if (typeof isostring !== 'string') {
        return null
    }
    try {
        const date = new Date(isostring)
        return format(date, 'MMMM do, yyyy')
    }
    catch (error) {
        console.log("Error formatting date", error)
        return isostring
    }
}

export default getDateFromISO