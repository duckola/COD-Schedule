// src/data/schedules.ts (or you can just put this in a component for now)

export interface TimeSlot {
    start: string; // e.g., "08:30"
    end: string;   // e.g., "09:30"
    activity?: string; // Optional: "CS1722", "Meeting"
  }
  
  export interface DailySchedule {
    [day: string]: TimeSlot[]; // "Monday": [{ start: "08:30", end: "09:30" }]
  }
  
  export type Role = 'editor' | 'photographer' | 'member' | 'videographer' | 'interviewer';
  
  export interface PersonSchedule {
    name: string;
    role: Role;
    schedule: DailySchedule;
  }
  
  // Example Data (Casey and Kelvin from our previous conversation)
  export const peopleSchedules: PersonSchedule[] = [
    {
      name: "Janelle",
      role: 'editor',
      schedule: {
        Monday: [
          { start: "11:00", end: "12:00", activity: "CS1722" },
          { start: "15:00", end: "16:00", activity: "SDG031" },
        ],
        Tuesday: [
          { start: "08:00", end: "09:00", activity: "CS243" },
          { start: "09:00", end: "10:00", activity: "CS17227" },
          { start: "11:00", end: "12:00", activity: "CS231" },
          { start: "16:00", end: "17:00", activity: "CS17104" },
        ],
        Wednesday: [
          { start: "11:00", end: "12:00", activity: "CS231" },
          { start: "17:30", end: "18:30", activity: "CS17113" },
        ],
        Thursday: [
          { start: "08:00", end: "09:00", activity: "CS243" },
          { start: "11:00", end: "12:00", activity: "CS17221" },
          { start: "15:00", end: "16:00", activity: "SDG031" },
          { start: "16:00", end: "17:00", activity: "PE205" },
        ],
        Friday: [
          { start: "09:00", end: "10:00", activity: "CS17227" },
          { start: "13:30", end: "14:30", activity: "CS17113" },
        ],
        Saturday: [],
        Sunday: [],
      },
    },

    //Kelvin
    {
      name: "Kelvin",
      role: 'photographer',
      schedule: {
        Monday: [
          { start: "07:30", end: "08:30", activity: "CS1313" },
          { start: "09:00", end: "10:00", activity: "CS17212" },
          { start: "13:00", end: "14:00", activity: "CS1345" },
        ],
        Tuesday: [
          { start: "13:30", end: "14:30", activity: "CS1327" },
          { start: "16:00", end: "17:00", activity: "CS1321" },
        ],
        Wednesday: [
          { start: "12:00", end: "13:00", activity: "CS1340" },
          { start: "17:00", end: "18:00", activity: "CS1365" },
        ],
        Thursday: [
          { start: "07:30", end: "08:30", activity: "CS1313" },
          { start: "09:00", end: "10:00", activity: "CS17212" },
          { start: "17:00", end: "18:00", activity: "CS1365" },
        ],
        Friday: [], // No busy slots for Kelvin on Friday
        Saturday: [
          { start: "10:00", end: "11:00", activity: "ES038" },
          { start: "14:00", end: "15:00", activity: "CS1327" },
          { start: "16:00", end: "17:00", activity: "CS1321" },
        ],
        Sunday: [],
      },
    },

    //Amaga
    {
        "name": "Amaga",
        "role": "editor",
        "schedule": {
          "Monday": [
            { "start": "11:30", "end": "12:30", "activity": "CSIT227 G3-AP4 GLE202" },
            { "start": "04:00", "end": "05:00", "activity": "IT227 G12-AP4 NGE207" }
          ],
          "Tuesday": [
            { "start": "11:30", "end": "12:30", "activity": "CSIT221 G8-AP4 GLE201" },
            { "start": "02:00", "end": "03:00", "activity": "SDG031 B2-AP5 RTL102" }
          ],
          "Wednesday": [
            { "start": "09:30", "end": "11:00", "activity": "PE205 WALKINGFORFITNESS/G5/G6-AP4 PE-ACTIVITY AREA1" },
            { "start": "12:00", "end": "01:00", "activity": "SOCSCI032 G3-AP5 GLE304" },
            { "start": "03:00", "end": "04:00", "activity": "CSIT213 G10-AP5 GLE202" },
            { "start": "06:00", "end": "07:00", "activity": "CSIT213 G10-AP5 online" }
          ],
          "Thursday": [
            { "start": "11:30", "end": "12:30", "activity": "CSIT227 G3-AP4 NGE105" },
            { "start": "03:00", "end": "04:00", "activity": "IT227 G12-AP4 RTL300" }
          ],
          "Friday": [
            { "start": "11:30", "end": "12:30", "activity": "CSIT221 G8-AP4 NGE102" },
            { "start": "12:00", "end": "01:00", "activity": "SOCSCI032 G3-AP5 online" },
            { "start": "02:00", "end": "03:00", "activity": "SDG031 B2-AP5 online" },
            { "start": "04:00", "end": "05:00", "activity": "CSIT104 G4-AP4 NGE101" }
          ],
          "Saturday": [],
          "Sunday": []
        }
      },

      //Magnanao
      {
        "name": "Magnanao",
        "role": "editor",
        "schedule": {
          "Monday": [
            { "start": "11:30", "end": "12:30", "activity": "CS243 F3-AP4 GLE203" },
            { "start": "04:00", "end": "06:00", "activity": "CSIT227 F3-AP4 NGE105" }
          ],
          "Tuesday": [
            { "start": "11:30", "end": "01:00", "activity": "CSIT104 F3-AP4 NGE101" },
            { "start": "04:00", "end": "06:00", "activity": "CSIT221 F3-AP4 GLE201" }
          ],
          "Wednesday": [
            { "start": "09:30", "end": "10:30", "activity": "SDG031 F3-AP5 RTL305" },
            { "start": "11:30", "end": "12:30", "activity": "CS231 F3-AP5 online" },
            { "start": "02:00", "end": "03:00", "activity": "PE205 LINEDANCE/B1/F3/F4-AP4 GYM" },
            { "start": "05:30", "end": "06:30", "activity": "CSIT213 F3-AP5 online" }
          ],
          "Thursday": [
            { "start": "11:30", "end": "12:30", "activity": "CS243 F3-AP4 NGE203" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT227 F3-AP4 GLE202" }
          ],
          "Friday": [
            { "start": "11:30", "end": "12:30", "activity": "CS231 F3-AP5 RTL300" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT221 F3-AP4 NGE102" }
          ],
          "Saturday": [
            { "start": "09:30", "end": "10:30", "activity": "SDG031 F3-AP5 online" }
          ],
          "Sunday": []
        }
      },

      //Uriel
      {
        "name": "Uriel",
        "role": "editor",
        "schedule": {
          "Monday": [
            { "start": "13:00", "end": "14:00", "activity": "CSIT111 G9-AP5 RTL304" },
            { "start": "15:30", "end": "16:30", "activity": "PSYCH031 G7-AP5 RTL224-PSYCH" },
            { "start": "16:30", "end": "17:30", "activity": "ENGL031 G9-AP5 RTL307" }
          ],
          "Tuesday": [
            { "start": "08:30", "end": "09:30", "activity": "MATH031 G7-AP5 GLE305" },
            { "start": "11:30", "end": "12:30", "activity": "CSIT121 G10-AP4 RTL303" },
            { "start": "15:30", "end": "16:30", "activity": "PHILO031 G9-AP5 GLE302" }
          ],
          "Wednesday": [
            { "start": "12:30", "end": "13:30", "activity": "CSIT111 G9-AP5 online" },
            { "start": "16:30", "end": "17:30", "activity": "PE103 G11/G12-AP4 PE-ACTIVITY AREA3" }
          ],
          "Thursday": [
            { "start": "08:30", "end": "09:30", "activity": "MATH031 G7-AP5 online" },
            { "start": "10:30", "end": "12:30", "activity": "CSIT121 G10-AP4 NGE104" },
            { "start": "15:30", "end": "16:30", "activity": "PSYCH031 G7-AP5 online" },
            { "start": "17:30", "end": "18:30", "activity": "ENGL031 G9-AP5 online" }
          ],
          "Friday": [
            { "start": "15:30", "end": "16:30", "activity": "PHILO031 G9-AP5 online" }
          ],
          "Saturday": [
            { "start": "13:30", "end": "15:30", "activity": "NSTP111 CCS-SAT-PM2-AP4 TBA" }
          ],
          "Sunday": []
        }      
      },
      
      //Gabriela's
      {
        "name": "Gabriela",
        "role": "editor",
        "schedule": {
          "Monday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - GLE 306" },
            { "start": "11:00", "end": "13:00", "activity": "Fundamentals of Programming - RTL 301" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - ACAD 310" }
          ],
          "Tuesday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - RTL 104" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - GLE 702" },
            { "start": "13:00", "end": "15:00", "activity": "PATHFIT - Covered Court" }
          ],
          "Wednesday": [
            { "start": "17:00", "end": "18:00", "activity": "Introduction to Computing - Online" }
          ],
          "Thursday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - Online" },
            { "start": "10:30", "end": "13:30", "activity": "Fundamentals of Programming - NGE 103" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - Online" }
          ],
          "Friday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - Online" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - Online" },
            { "start": "13:00", "end": "15:00", "activity": "Introduction to Computing - RTL 300" }
          ],
          "Saturday": [
            { "start": "08:00", "end": "12:00", "activity": "National Service Training Program - TBA" }
          ]
        }
      },
      
      
      //Liyah's
      {
        "name": "Alliyah",
        "role": "interviewer",
        "schedule": {
          "Monday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - GLE 306" },
            { "start": "11:00", "end": "13:00", "activity": "Fundamentals of Programming - RTL 301" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - ACAD 310" }
          ],
          "Tuesday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - RTL 104" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - GLE 702" },
            { "start": "13:00", "end": "15:00", "activity": "PATHFIT - Covered Court" }
          ],
          "Wednesday": [
            { "start": "17:00", "end": "18:00", "activity": "Introduction to Computing - Online" }
          ],
          "Thursday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - Online" },
            { "start": "10:30", "end": "13:30", "activity": "Fundamentals of Programming - NGE 103" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - Online" }
          ],
          "Friday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - Online" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - Online" },
            { "start": "13:00", "end": "15:00", "activity": "Introduction to Computing - RTL 300" }
          ],
          "Saturday": [
            { "start": "08:00", "end": "12:00", "activity": "National Service Training Program - TBA" }
          ]
        }
      },

      //Caitlin's
      {
        "name": "Caitlin",
        "role": "editor",
        "schedule": {
          "Monday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - GLE 306" },
            { "start": "11:00", "end": "13:00", "activity": "Fundamentals of Programming - RTL 301" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - ACAD 310" }
          ],
          "Tuesday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - RTL 104" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - GLE 702" },
            { "start": "13:00", "end": "15:00", "activity": "PATHFIT - Covered Court" }
          ],
          "Wednesday": [
            { "start": "17:00", "end": "18:00", "activity": "Introduction to Computing - Online" }
          ],
          "Thursday": [
            { "start": "09:00", "end": "10:30", "activity": "Mathematics in the Modern World - Online" },
            { "start": "10:30", "end": "13:30", "activity": "Fundamentals of Programming - NGE 103" },
            { "start": "13:30", "end": "15:00", "activity": "Purposive Communication - Online" }
          ],
          "Friday": [
            { "start": "09:00", "end": "10:30", "activity": "Ethics - Online" },
            { "start": "10:30", "end": "12:00", "activity": "Understanding the Self - Online" },
            { "start": "13:00", "end": "15:00", "activity": "Introduction to Computing - RTL 300" }
          ],
          "Saturday": [
            { "start": "08:00", "end": "12:00", "activity": "National Service Training Program - TBA" }
          ]
        }
      },

      //Jakes
      {
        "name": "Jake",
        "role": "photographer",
        "schedule": {
          "Monday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT227 - G5 (LAB - NGE105)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2 (LEC - TBA)" }
          ],
          "Tuesday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT221 - G2 (LAB - NGE104)" },
            { "start": "03:30", "end": "04:30", "activity": "IT227 - G2 (LEC - GLE203)" }
          ],
          "Wednesday": [
            { "start": "09:30", "end": "10:30", "activity": "SOCSCI032 - E4 (ONLINE)" },
            { "start": "01:30", "end": "03:00", "activity": "CSIT213 - G7 (LEC - GLE203)" }
          ],
          "Thursday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT227 - G5 (LEC - GLE202)" },
            { "start": "01:30", "end": "03:00", "activity": "PE104 (M7/R10)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2 (ONLINE)" }
          ],
          "Friday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT221 - G2 (LEC - RTL301)" },
            { "start": "04:00", "end": "05:30", "activity": "IT227 - G2 (LAB - NGE207)" }
          ],
          "Saturday": [
            { "start": "09:30", "end": "10:30", "activity": "SOCSCI032 - E4 (LEC - GLE304)" },
            { "start": "11:30", "end": "01:30", "activity": "CSIT104 - G6 (LAB - NGE101)" }
          ]
        }
      },

      //Lariego's
      {
        "name": "Jake",
        "role": "photographer",
        "schedule": {
          "Monday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT227 - G5 (LAB - NGE105)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2 (LEC - TBA)" }
          ],
          "Tuesday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT221 - G2 (LAB - NGE104)" },
            { "start": "03:30", "end": "04:30", "activity": "IT227 - G2 (LEC - GLE203)" }
          ],
          "Wednesday": [
            { "start": "09:30", "end": "10:30", "activity": "SOCSCI032 - E4 (ONLINE)" },
            { "start": "01:30", "end": "03:00", "activity": "CSIT213 - G7 (LEC - GLE203)" }
          ],
          "Thursday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT227 - G5 (LEC - GLE202)" },
            { "start": "01:30", "end": "03:00", "activity": "PE104 (M7/R10)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2 (ONLINE)" }
          ],
          "Friday": [
            { "start": "11:30", "end": "01:30", "activity": "CSIT221 - G2 (LEC - RTL301)" },
            { "start": "04:00", "end": "05:30", "activity": "IT227 - G2 (LAB - NGE207)" }
          ],
          "Saturday": [
            { "start": "09:30", "end": "10:30", "activity": "SOCSCI032 - E4 (LEC - GLE304)" },
            { "start": "11:30", "end": "01:30", "activity": "CSIT104 - G6 (LAB - NGE101)" }
          ]
        }
      },
      

    //Cabigas
    {
        "name": "Cabigas",
        "role": "member",
        "schedule": {
          "Monday": [
            { 
              "start": "08:30", 
              "end": "10:30", 
              "activity": "IT386 - G2-AP4 (RTL223)" 
            }
          ],
          "Tuesday": [
            { 
              "start": "08:30", 
              "end": "10:30", 
              "activity": "CSIT360 - G2-AP5 (RTL304)" 
            }
          ],
          "Wednesday": [
            { 
              "start": "07:30", 
              "end": "09:30", 
              "activity": "IT386 - G2-AP4 (NGE203)" 
            },
            { 
              "start": "05:30", 
              "end": "07:30", 
              "activity": "CSIT341 - G3-AP3 (Online)" 
            }
          ],
          "Thursday": [],
          "Friday": [
            { 
              "start": "07:30", 
              "end": "09:30", 
              "activity": "CSIT360 - G2-AP5 (Online)" 
            },
            { 
              "start": "05:30", 
              "end": "07:30", 
              "activity": "(IT411 - G4-AP3 FIELD) AND (CSIT341 - G3-AP3 Online) ARE CONFLICT." 
            }
          ],
          "Saturday": [],
          "Sunday": []
        }
      },

      //Canton
      {
        "name": "Canton",
        "role": "member",
        "schedule": {
          "Monday": [
            { "start": "01:30", "end": "02:30", "activity": "PHIL0031 - G8-AP5 (Online)" },
            { "start": "03:30", "end": "04:30", "activity": "ENGL0031 - G4-AP5 (RTL430)" }
          ],
          "Tuesday": [
            { "start": "08:30", "end": "09:30", "activity": "CSIT1121 - G8-AP4 (RTL303)" },
            { "start": "11:30", "end": "12:30", "activity": "PE103 - G8/PA-AP4 (PE-ACTIVITY AREA3)" },
            { "start": "01:30", "end": "02:30", "activity": "CSIT111 - G8-AP5 (RTL304)" },
            { "start": "04:30", "end": "05:30", "activity": "MATH0031 - G8-AP5 (Online)" }
          ],
          "Wednesday": [
            { "start": "10:30", "end": "11:30", "activity": "PSYCH0031 - G6-AP5 (RTL431)" },
            { "start": "12:30", "end": "01:30", "activity": "CSIT111 - G8-AP5 (Online)" }
          ],
          "Thursday": [
            { "start": "01:30", "end": "02:30", "activity": "PHIL0031 - G8-AP5 (GLE504)" },
            { "start": "03:30", "end": "04:30", "activity": "ENGL0031 - G4-AP5 (Online)" }
          ],
          "Friday": [
            { "start": "08:30", "end": "09:30", "activity": "CSIT121 - G8-AP4 (NGE104)" },
            { "start": "04:30", "end": "05:30", "activity": "MATH0031 - G8-AP5 (GLE306)" }
          ],
          "Saturday": [
            { "start": "10:30", "end": "11:30", "activity": "PSYCH0031 - G6-AP5 (Online)" },
            { "start": "01:30", "end": "04:30", "activity": "NSTP111 - CCS-SATPM2-AP4 (TBA)" }
          ],
          "Sunday": []
        }
      },

      //Dianne
      {
        "name": "Dianne",
        "role": "member",
        "schedule": {
          "Monday": [
            { "start": "09:30", "end": "11:30", "activity": "PE206 - PHFOLKDANCE/K02-AP4 (GYM)" },
            { "start": "01:30", "end": "02:30", "activity": "CSIT238 - G02-AP5 (RTL301)" }
          ],
          "Tuesday": [
            { "start": "10:30", "end": "12:30", "activity": "IT227 - G13-AP4 (NGE202)" }
          ],
          "Wednesday": [
            { "start": "07:30", "end": "09:30", "activity": "CSIT201 - G01-AP4 (NGE105)" },
            { "start": "11:30", "end": "01:30", "activity": "CSIT221 - G12-AP4 (GLE201)" },
            { "start": "01:30", "end": "02:30", "activity": "CSIT238 - G02-AP5 (Online)" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT213 - G9-AP5 (RTL302)" },
            { "start": "06:30", "end": "07:30", "activity": "CSIT213 - G9-AP5 (Online)" }
          ],
          "Thursday": [],
          "Friday": [
            { "start": "10:30", "end": "12:30", "activity": "IT227 - G13-AP4 (RTL304)" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT104 - G12-AP4 (NGE203)" },
            { "start": "06:30", "end": "07:30", "activity": "CSIT227 - G12-AP4 (RTL302)" }
          ],
          "Saturday": [
            { "start": "10:30", "end": "12:30", "activity": "CSIT221 - G12-AP4 (NGE102)" }
          ],
          "Sunday": []
        }
      },

      //Gian
      {
        "name": "Gian",
        "role": "member",
        "schedule": {
          "Monday": [
            { "start": "08:30", "end": "09:30", "activity": "CS243 - F2-AP4 (GLE203)" },
            { "start": "10:30", "end": "12:30", "activity": "CSIT221 - F2-AP4 (NGE102)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2-AP5 (RTL217)" }
          ],
          "Tuesday": [
            { "start": "08:30", "end": "09:30", "activity": "CSIT227 - F2-AP4 (GLE201)" },
            { "start": "10:30", "end": "12:30", "activity": "CS231 - F2-AP5 (RTL300)" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT104 - F2-AP4 (NGE101)" }
          ],
          "Wednesday": [
            { "start": "10:30", "end": "12:30", "activity": "CS231 - F2-AP5 (Online)" },
            { "start": "06:30", "end": "07:30", "activity": "CSIT213 - F2-AP5 (Online)" }
          ],
          "Thursday": [
            { "start": "08:30", "end": "09:30", "activity": "CS243 - F2-AP4 (NGE203)" },
            { "start": "10:30", "end": "12:30", "activity": "CSIT221 - F2-AP4 (GLE201)" },
            { "start": "03:30", "end": "04:30", "activity": "SDG031 - F2/G2-AP5 (Online)" }
          ],
          "Friday": [
            { "start": "08:30", "end": "09:30", "activity": "CSIT227 - F2-AP4 (NGE102)" },
            { "start": "01:30", "end": "02:30", "activity": "CSIT213 - F2-AP5 (RTL301)" }
          ],
          "Saturday": [
            { "start": "03:30", "end": "04:30", "activity": "PE205 - WALKINGFORFITNESS/R1-AP4 (PE-COVEREDCOURT)" }
          ],
          "Sunday": []
        }
      },

      //Narca's
      {
        "name": "Narca",
        "role": "member",
        "schedule": {
          "Monday": [
            { "start": "09:30", "end": "10:30", "activity": "ENGL031 - F5-AP5 (RTL307)" },
            { "start": "01:30", "end": "02:30", "activity": "PHIL0031 - F5-AP5 (RTL104)" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT121 - F5-AP4 (RTL300)" }
          ],
          "Tuesday": [
            { "start": "11:30", "end": "12:30", "activity": "PE103 - G8/P4-AP4 (PE-Activity Area)" },
            { "start": "01:30", "end": "02:30", "activity": "PSYCH031 - F5-AP5 (RTL417)" }
          ],
          "Wednesday": [
            { "start": "01:30", "end": "02:30", "activity": "CSIT111 - F5-AP5 (RTL300)" },
            { "start": "03:30", "end": "04:30", "activity": "MATH031 - F5-AP5 (GLE305)" },
            { "start": "05:30", "end": "06:30", "activity": "CSIT111 - F5-AP5 (Online)" }
          ],
          "Thursday": [
            { "start": "09:30", "end": "10:30", "activity": "ENGL031 - F5-AP5 (Online)" },
            { "start": "01:30", "end": "02:30", "activity": "PHIL0031 - F5-AP5 (Online)" },
            { "start": "03:30", "end": "04:30", "activity": "CSIT121 - F5-AP4 (NGE101)" }
          ],
          "Friday": [
            { "start": "01:30", "end": "02:30", "activity": "PSYCH031 - F5-AP5 (Online)" }
          ],
          "Saturday": [
            { "start": "08:30", "end": "11:30", "activity": "NSTP111 - CEA-ALL-SAT-AM3-AP4 (TBA)" },
            { "start": "03:30", "end": "04:30", "activity": "MATH031 - F5-AP5 (Online)" }
          ],
          "Sunday": []
        }
      },

      //Trexie
      {
        "name": "Trexie",
        "role": "member",
        "schedule": {
          "Monday": [
            { "start": "08:00", "end": "10:00", "activity": "CSIT121 - AP4 (RTL301)" },
            { "start": "10:30", "end": "12:00", "activity": "PHIL0031 - AP5 (RTL104)" },
            { "start": "01:30", "end": "03:00", "activity": "ENGL031 - AP5 (ACAD308)" },
            { "start": "03:00", "end": "05:00", "activity": "PE103 - (PE Activity Area 3)" }
          ],
          "Tuesday": [
            { "start": "09:00", "end": "10:30", "activity": "MATH031 - AP5 (Online)" },
            { "start": "10:30", "end": "12:00", "activity": "PSYCH031 - AP5 (RTL219)" }
          ],
          "Wednesday": [
            { "start": "05:00", "end": "06:00", "activity": "CSIT111 - AP5 (Online)" }
          ],
          "Thursday": [
            { "start": "07:30", "end": "10:00", "activity": "CSIT121 - AP4 (NGE103)" },
            { "start": "10:30", "end": "12:00", "activity": "PHIL0031 - AP5 (Online)" },
            { "start": "01:00", "end": "03:00", "activity": "CSIT111 - AP5 (RTL503)" }
          ],
          "Friday": [
            { "start": "09:00", "end": "10:30", "activity": "MATH031 - AP5 (GLE306)" },
            { "start": "10:30", "end": "12:00", "activity": "PSYCH031 - AP5 (Online)" },
            { "start": "01:30", "end": "03:00", "activity": "ENGL031 - AP5 (Online)" }
          ],
          "Saturday": [
            { "start": "08:00", "end": "12:00", "activity": "NSTP111 - CCS | SAT | AM1 AP4 (TBA)" }
          ],
          "Sunday": []
        }
      }
      
      
      
      
      

         


  ];
  
  export const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  export const ROLES = ['all', 'editor', 'photographer', 'member', 'videographer', 'interviewer'] as const;