import dayjs from "dayjs";
import { businessDays } from "@/constants";
import { OccupancyData, SchedulerProjectData, TimeUnits } from "@/types/global";
import { getDuration } from "./getDuration";
import { getTotalHoursAndMinutes } from "./getTotalHoursAndMinutes";
import { getTimeOccupancy } from "./getTimeOccupancy";

export const getWeekOccupancy = (
  occupancy: SchedulerProjectData[],
  maxOccupancy: number,
  focusedDate: dayjs.Dayjs
): OccupancyData => {
  const focusedWeek = focusedDate.isoWeek();

  const getHoursAndMinutes: TimeUnits[] = occupancy.map((item) => {
    const startWeekNum = dayjs(item.startDate).isoWeek();
    const startDateDayNum = dayjs(item.startDate).isoWeekday();

    const endWeekNum = dayjs(item.endDate).isoWeek();
    const endDateDayNum = dayjs(item.endDate).isoWeekday();

    const { hours: itemHours, minutes: itemMinutes } = getDuration(item.occupancy);

    if (focusedWeek === startWeekNum) {
      const hours = (businessDays + 1 - startDateDayNum) * itemHours;
      const minutes = (businessDays + 1 - startDateDayNum) * itemMinutes;
      return { hours: Math.max(0, hours), minutes };
    } else if (focusedWeek === endWeekNum) {
      const hours =
        endDateDayNum > businessDays ? businessDays * itemHours : endDateDayNum * itemHours;
      const minutes =
        endDateDayNum > businessDays ? businessDays * itemMinutes : endDateDayNum * itemMinutes;
      return { hours, minutes };
    } else if (dayjs(focusedDate).isBetween(item.startDate, item.endDate)) {
      return { hours: businessDays * itemHours, minutes: businessDays * itemMinutes };
    }
    return { hours: 0, minutes: 0 };
  });

  const { hours: totalHours, minutes: totalMinutes } = getTotalHoursAndMinutes(getHoursAndMinutes);
  const { hours: maxHours, minutes: maxMinutes } = getDuration(maxOccupancy);

  const { free, overtime } = getTimeOccupancy(
    { hours: totalHours, minutes: totalMinutes },
    { hours: maxHours, minutes: maxMinutes }
  );

  return {
    taken: { hours: Math.max(0, totalHours), minutes: Math.max(0, totalMinutes) },
    free,
    overtime
  };
};
