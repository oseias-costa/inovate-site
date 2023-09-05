export const formatDate = (date: string): string => {
    const itemDate = new Date(date)
    const month = (itemDate.getMonth() + 1).toString() 
    const day = itemDate.getDate().toString()
    const year = itemDate.getFullYear().toString()
  
    const mm = month.length === 1 ? `0${month}` : month
    const dd = day.length === 1 ? `0${day}` : day
    const yy = year.slice(2,4)
  
    return `${dd}/${mm}/${yy}`
  }
  