dates = [
    '20/03/1995',
    '20/03/95',
    '20 03 1995',
    '20 03 95',
    '20-03-1995',
    '20-03-95',
    '20.03.1995',
    '20.03.95',
    '20 Marzo 1995',
    '20 Marzo 95',
    '20/Marzo/95',
    '20/marzo/95',
    '21-septiembre-1990',
    '28/febrero-14',
    '28/junio/2014',
    '21-junio-2000',
    '21-junio-05',
    '13-febrero-15'
]

const months = ['enero', 'febrero', 'marzo', 'abril',
    'mayo', 'junio', 'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre'
]

const monthToNumber = monthName =>
    isNaN(monthName) ?
    String(months.indexOf(monthName) + 1) :
    String(parseInt(monthName))

const to4Digits = year =>
    year.length == 4 ?
    year :
    formatYear(year)

const formatYear = year =>
    parseInt(year) < 20 ?
    `20${year}` :
    `19${year}`


/*
    Function to format dates to dd/mm/yyyy
*/
const formatDate = rawDate => {
    return [rawDate]
        .map(x => x.toLowerCase())
        .map(x => x.replace(/[^0-9a-z\\]+/g, '/'))
        .map(x => x.split('/'))
        .map(x => [x[0], monthToNumber(x[1]), to4Digits(x[2])])
        .map(x => x.join('/'))
        .join()
}

console.log(dates.map(formatDate))
console.log(formatDate('12 marzo 1942'))
