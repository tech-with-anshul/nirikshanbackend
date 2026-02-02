// Utility to check if a date is after a cutoff hour (e.g., 22 for 10pm)
export function isAfterCutoff(date: Date, cutoffHour: number): boolean {
  return date.getHours() >= cutoffHour;
} 