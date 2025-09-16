// src/components/ScheduleGrid.tsx
import React, { useState, useEffect } from 'react';
import { peopleSchedules, DAYS_OF_WEEK, ROLES } from '../data/schedules';
import { generateConsolidatedSchedule } from '../utils/scheduleProcessor';
import type { ConsolidatedDay, ConsolidatedSlot } from '../utils/scheduleProcessor';
import './ScheduleGrid.css'; // For styling the grid

const ScheduleGrid: React.FC = () => {
  const [consolidatedData, setConsolidatedData] = useState<ConsolidatedDay>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [roleFilter, setRoleFilter] = useState<(typeof ROLES)[number]>('all');

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    const data = generateConsolidatedSchedule(peopleSchedules);
    setConsolidatedData(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading schedules...</div>;
  }

  // Get all unique time slots from the first day to use as row headers
  const timeSlots = consolidatedData[DAYS_OF_WEEK[0]]?.map(slot => slot.time) || [];
  if (timeSlots.length === 0) {
      return <div>No schedule data available.</div>;
  }

  return (
    <div className="schedule-container">
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="roleFilter" style={{ marginRight: 8 }}>Role:</label>
        <select id="roleFilter" value={roleFilter} onChange={e => setRoleFilter(e.target.value as (typeof ROLES)[number])}>
          {ROLES.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th className="time-header">Time</th>
            {DAYS_OF_WEEK.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, index) => (
            <tr key={time}>
              <td className="time-cell">{time}</td>
              {DAYS_OF_WEEK.map(day => {
                const slot: ConsolidatedSlot | undefined = consolidatedData[day]?.[index];
                const busyPeopleList = slot?.busyPeople ?? [];
                const filteredPeople = roleFilter === 'all' ? peopleSchedules : peopleSchedules.filter(p => p.role === roleFilter);
                const allPeopleNames = filteredPeople.map(p => p.name);
                const freePeopleList = allPeopleNames.filter(name => !busyPeopleList.includes(name));
                const hasFree = freePeopleList.length > 0;

                return (
                  <td key={`${day}-${time}`} className={`schedule-cell ${hasFree ? 'free' : 'busy'}`}>
                    {hasFree ? (
                      <>
                        <span className="status-free">Free:</span> {freePeopleList.join(', ')}
                      </>
                    ) : (
                      <span className="status-busy">All busy</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleGrid;