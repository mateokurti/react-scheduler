import dayjs from "dayjs";
import {
  SchedulerProjectData,
  OccupancyData,
  ZoomLevel,
  PaginatedSchedulerRow
} from "@/types/global";
import { getWeekOccupancy } from "./getWeekOccupancy";
import { getDayOccupancy } from "./getDayOccupancy";

export const getOccupancy = (
  resource: PaginatedSchedulerRow,
  resourceIndex: number,
  focusedDate: dayjs.Dayjs,
  zoom: ZoomLevel,
  includeTakenHoursOnWeekendsInDayView = false
): OccupancyData => {
  if (resourceIndex < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };

  const maxOccupancy = resource.label.maxOccupancy;
  const occupancy = resource.data.flat(2).filter((item: SchedulerProjectData) => {
    if (zoom === 0) {
      return (
        dayjs(item.startDate).isBetween(
          dayjs(focusedDate),
          dayjs(focusedDate).add(6, "days"),
          "day",
          "[]"
        ) || dayjs(focusedDate).isBetween(dayjs(item.startDate), dayjs(item.endDate), "day", "[]")
      );
    } else {
      return dayjs(focusedDate).isBetween(item.startDate, item.endDate, "day", "[]");
    }
  });

  return zoom === 0
    ? getWeekOccupancy(occupancy, maxOccupancy, focusedDate)
    : getDayOccupancy(occupancy, maxOccupancy, focusedDate, includeTakenHoursOnWeekendsInDayView);
};
