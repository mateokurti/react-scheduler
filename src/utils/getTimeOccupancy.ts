import { minutesInHour } from "@/constants";
import { OccupancyData, TimeUnits } from "@/types/global";

export const getTimeOccupancy = (
  timeUnits: TimeUnits,
  maxOccupancy: TimeUnits
): Omit<OccupancyData, "taken"> => {
  const getFreeTime = () => {
    let hours = maxOccupancy.hours - timeUnits.hours;
    let minutes = maxOccupancy.minutes - timeUnits.minutes;

    if (minutes === minutesInHour) {
      hours++;
      minutes = 0;
    }
    return { hours: Math.max(0, hours), minutes: hours < 0 ? 0 : minutes };
  };

  const getOverTime = () => {
    const overHours = timeUnits.hours - maxOccupancy.hours;
    const overMinutes = timeUnits.minutes - maxOccupancy.minutes;
    return { hours: Math.max(0, overHours), minutes: overHours < 0 ? 0 : overMinutes };
  };

  return {
    free: getFreeTime(),
    overtime: getOverTime()
  };
};
