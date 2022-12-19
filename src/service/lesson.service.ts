import {NewLesson} from '../model/NewLesson';
import {TimeInterval} from '../model/TimeInterval';
import {LocalTime} from '@js-joda/core';
import {BLOCK_TIME_MINUTES, STUDY_TIME_FROM, STUDY_TIME_TO} from '../const/time.cont';
import {Lesson} from "../model/Lesson";
import {TimeService} from "./time.service";
import e from "express";

export class LessonService {
    lessonStorage: Lesson[];

    constructor() {
        this.lessonStorage = [];
    }

    getAll(day?: string | undefined): Lesson[] {
        const lessons = this.lessonStorage.sort((a, b) => {
            return a.getSecondsFromMidnight() - b.getSecondsFromMidnight();
        });
        if(day !== undefined){
            return lessons.filter(e => e.getDay().toLowerCase()===day.toLowerCase())
        }
        else {
            return lessons
        }

    }

    add(newLesson: NewLesson): number {
        const interval = newLesson.getInterval()
        const id = this.lessonStorage.length + 1;
        const lesson = new Lesson (id, newLesson.getDay(), newLesson.getShortcut(), newLesson.getName(), interval);
        this.lessonStorage.push(lesson);
        return lesson.getId();
    }

    hasStartTime(lesson: NewLesson, lessonDay: string): boolean {
        const checker = (arr: string[], target: string[]) => target.every(v => arr.includes(v));
        return !checker(this.freeLessonTimes(lessonDay),lesson.getInterval().getLessonTimes())
    }

    freeLessonTimes(lessonDay: string): string[] {
        const day = new TimeInterval(LocalTime.of(9,15),LocalTime.of(20));
        let result = day.getLessonTimes();
        this.lessonStorage.filter(e => e.getDay().toLowerCase() === lessonDay.toLowerCase()).forEach(lesson => {
            const times = lesson.getInterval().getLessonTimes()
            result = result.filter(time => !times.includes(time))
        })
        return result;
    }

}