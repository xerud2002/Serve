/**
 * Parse event date strings into valid Date objects
 * Handles multiple date formats including UK format (e.g., "Monday, 24 February 2025")
 * 
 * @param dateString - Date string to parse
 * @returns Valid Date object or fallback date
 */
export function parseEventDate(dateString: string): Date {
  // Try standard date parsing first
  let date = new Date(dateString)
  
  // If date parsing fails, try UK date format
  if (isNaN(date.getTime())) {
    // Match format: "Day, DD Month YYYY" or "DD Month YYYY"
    const dateMatch = dateString.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/)
    if (dateMatch) {
      const [, day, month, year] = dateMatch
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      const monthIndex = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase())
      
      if (monthIndex !== -1) {
        date = new Date(parseInt(year), monthIndex, parseInt(day))
      }
    }
  }
  
  // If still invalid, use a future date as fallback
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date format: "${dateString}". Using fallback date.`)
    date = new Date()
    date.setDate(date.getDate() + 7) // 1 week from now
  }
  
  return date
}

/**
 * Parse time string and set hours/minutes on a Date object
 * 
 * @param date - Date object to modify
 * @param timeString - Time string (e.g., "10:00-12:00" or "10:00")
 * @returns Modified Date object with time set
 */
export function parseEventTime(date: Date, timeString: string): Date {
  // Extract start time from range if present
  const timeParts = timeString.split('-')[0]?.trim() || '10:00'
  const [hoursStr, minutesStr] = timeParts.split(':')
  
  const hours = parseInt(hoursStr) || 10
  const minutes = parseInt(minutesStr) || 0
  
  date.setHours(hours, minutes, 0, 0)
  return date
}

/**
 * Parse event date and time into a complete Date object
 * 
 * @param dateString - Date string
 * @param timeString - Time string
 * @returns Complete Date object with date and time
 */
export function parseEventDateTime(dateString: string, timeString: string): Date {
  const date = parseEventDate(dateString)
  return parseEventTime(date, timeString)
}
