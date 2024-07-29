import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
/**
 * get id inside the url property
 * @param url
 * @returns id
 */
export const getIdFromUrl = (url: string): string => {
  return url.split("/").slice(-2, -1)[0]
}

/*
  combines twmerge and clsx
  return: string 
  for both cases
  use as: className={cn("text-3xl", "lg:text-6xl", "font-bold", "tracking-tight")}
  */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
