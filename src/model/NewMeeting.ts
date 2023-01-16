import { LocalDate } from "@js-joda/core";

export class NewMeeting {
  private name: string;
  private start: number;
  private date: LocalDate;

  constructor(
    name: string | undefined,
    start: number | undefined,
    date?: LocalDate
  ) {
    this.name = name ? name : "Meeting";
    this.start = start ? start : 8;
    this.date = date || LocalDate.now();
  }

  getName(): string {
    return this.name;
  }

  getStart(): number {
    return this.start;
  }

  getDate(): LocalDate {
    return this.date;
  }
}
