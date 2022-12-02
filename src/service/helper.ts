import { Employee } from "../model/Employee";
import { Meeting } from "../model/Meeting";
import { Interval } from "@js-joda/extra";
import { Instant } from "@js-joda/core";
import { INTERVALFIX } from "../const/datetime.const";

export abstract class Helper {

   static arrayIdSearch(data: any[], id: string | number): number {
      const index = data.findIndex((x: { getId: () => number; }) => x.getId() === Number(id));
      return index;
   }

   static getNextId(data: any[]): number {
      const id = data[data.length - 1].getId() + 1;
      return id;
   }

   static getObject(data: any[], id: string | number): any {
      const obj = data.filter(obj => obj.getId() == Number(id));
      return obj;
   }

   static generateInviteesArray(employees: Employee[], invitees: number[]): Employee[] {
      var invitee_arr: Employee[] = [];
      for(var i = 0; i < invitees.length; i++) {
         invitee_arr.push(employees[this.arrayIdSearch(employees, invitees[i])]);
      }
      return invitee_arr;
   }

   static validateMeeting(data: Meeting[], meeting: Meeting): boolean {
      const meeting_start: Instant = Instant.parse(meeting.getStartDateTime().toString()+INTERVALFIX)
      const meeting_end: Instant = Instant.parse(meeting.getEndDateTime().toString()+INTERVALFIX)
      const meeting_interval: Interval = Interval.of(meeting_start, meeting_end);
      for(var i = 0; i < data.length; i++) {
         const data_start: Instant = Instant.parse(data[i].getStartDateTime().toString()+INTERVALFIX)
         const data_end: Instant = Instant.parse(data[i].getEndDateTime().toString()+INTERVALFIX)
         const data_interval: Interval = Interval.of(data_start, data_end);

         if(meeting_interval.overlaps(data_interval) && data[i].getMeetingRoom() == meeting.getMeetingRoom()) {
            return false;
         }
      }
      return true;
   }

}