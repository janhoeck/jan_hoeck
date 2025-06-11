import { DateTime } from 'luxon'

export const ADMIN_QUERY_PARAM = 'jan_is_only_admin'

export const canAccessDay = (currentDate: Date | undefined, day: number): boolean => {
  if (!currentDate) {
    return false
  }

  const currentDateLuxon = DateTime.fromJSDate(currentDate)
  // Open a door is just allowed in december (zero based)
  if (currentDateLuxon.month !== 12) {
    return false
  }

  return day <= currentDateLuxon.day
}
