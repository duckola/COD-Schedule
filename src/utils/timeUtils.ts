// src/utils/timeUtils.ts

export function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  
  export function minutesToTime(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  export function formatTo12Hour(time24: string): string {
    const [hStr, mStr] = time24.split(':');
    let hour = parseInt(hStr, 10);
    const minutes = parseInt(mStr, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    if (hour === 0) hour = 12;
    const minutesPadded = String(minutes).padStart(2, '0');
    return `${hour}:${minutesPadded} ${suffix}`;
  }

  export function formatRange12Hour(start24: string, end24: string): string {
    return `${formatTo12Hour(start24)} - ${formatTo12Hour(end24)}`;
  }