import { TimeInterval } from "./TimeInterval";
import { LocalDate } from "@js-joda/core";

export class Meeting {
  private id: number;
  private name: string;
  private interval: TimeInterval;
  private date: LocalDate;

  constructor(
    id: number,
    name: string,
    interval: TimeInterval,
    date: LocalDate
  ) {
    this.id = id;
    this.name = name;
    this.interval = interval;
    this.date = date;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSecondsFromMidnight(): number {
    const startTime = this.interval.getFrom();
    return startTime.toSecondOfDay();
  }

  getInterval(): TimeInterval {
    return this.interval;
  }

  getDate(): LocalDate {
    return this.date;
  }
}
