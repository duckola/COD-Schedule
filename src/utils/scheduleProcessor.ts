// src/utils/scheduleProcessor.ts

import type { PersonSchedule } from '../data/schedules';
import { DAYS_OF_WEEK } from '../data/schedules';
import { timeToMinutes, minutesToTime, formatRange12Hour } from './timeUtils';

// Define the smallest interval for the consolidated schedule (e.g., 30 minutes)
const INTERVAL_MINUTES = 30;
const START_HOUR = 7; // 7 AM
const END_HOUR = 20;  // 8 PM (Adjust as needed)

export interface ConsolidatedSlot {
  time: string; // e.g., "08:30 - 09:00"
  busyPeople: string[]; // Names of people busy during this slot
  isFree: boolean; // True if no one is busy
}

export interface ConsolidatedDay {
  [day: string]: ConsolidatedSlot[];
}

export function generateConsolidatedSchedule(
  peopleSchedules: PersonSchedule[]
): ConsolidatedDay {
  const consolidatedSchedule: ConsolidatedDay = {};

  DAYS_OF_WEEK.forEach(day => {
    consolidatedSchedule[day] = [];
    const dayStartMinutes = timeToMinutes(`${START_HOUR}:00`);
    const dayEndMinutes = timeToMinutes(`${END_HOUR}:00`);

    for (let currentMinute = dayStartMinutes; currentMinute < dayEndMinutes; currentMinute += INTERVAL_MINUTES) {
      const slotStart = minutesToTime(currentMinute);
      const slotEnd = minutesToTime(currentMinute + INTERVAL_MINUTES);
      const busyPeopleInSlot: string[] = [];

      peopleSchedules.forEach(person => {
        const busySlotsToday = person.schedule[day] || [];
        const isPersonBusy = busySlotsToday.some(personBusySlot => {
          const personBusyStart = timeToMinutes(personBusySlot.start);
          const personBusyEnd = timeToMinutes(personBusySlot.end);

          // Check for overlap:
          // A person is busy in the current slot if their busy period
          // starts before the slot ends AND their busy period ends after the slot starts.
          return (personBusyStart < timeToMinutes(slotEnd) && personBusyEnd > timeToMinutes(slotStart));
        });

        if (isPersonBusy) {
          busyPeopleInSlot.push(person.name);
        }
      });

      consolidatedSchedule[day].push({
        time: formatRange12Hour(slotStart, slotEnd),
        busyPeople: busyPeopleInSlot,
        isFree: busyPeopleInSlot.length === 0,
      });
    }
  });

  return consolidatedSchedule;
}