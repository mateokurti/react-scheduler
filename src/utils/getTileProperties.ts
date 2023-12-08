import dayjs from "dayjs";
import { boxHeight, oneHourHeight, tileHeight, tileYOffset } from "@/constants";
import { TileProperties } from "@/types/global";
import { getTileXAndWidth } from "./getTileXAndWidth";

export const getTileProperties = (
  row: number,
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs,
  resourceStartDate: Date,
  resourceEndDate: Date,
  resourceOccupancy: number,
  zoom: number
): TileProperties => {
  const height = tileHeight || oneHourHeight * (resourceOccupancy / 3600) * 5;
  const y = row * boxHeight + tileYOffset;
  const parsedResourceStartDate = dayjs(resourceStartDate).hour(0).minute(0);
  const parsedResourceEndDate = dayjs(resourceEndDate).hour(23).minute(59);

  return {
    ...getTileXAndWidth(
      { startDate: parsedResourceStartDate, endDate: parsedResourceEndDate },
      { startDate, endDate },
      zoom
    ),
    y,
    height
  };
};
