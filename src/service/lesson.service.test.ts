import {beforeEach, describe} from '@jest/globals';
import {LessonService} from './lesson.service';
import {NewLesson} from "../model/NewLesson";

describe('LessonService', () => {
    let lessonService: LessonService;

    beforeEach(() => {
        lessonService = new LessonService();
    });

    test('Sort podla casu 1', () => {
        const newLesson1 = new NewLesson(1, "PRP","Podpora rozhodovacich procesov", "09:15", "10:45");
        const newLesson2 = new NewLesson(2,"MSII", "Management Science II", "11:00", "12:30");
        const newLesson3 = new NewLesson(3, "UIES", "Umela Inteligencia a expertne systemy", "15:15", "16:45");

        lessonService.add(newLesson1);
        lessonService.add(newLesson2);
        lessonService.add(newLesson3);

        const lessons = lessonService.getAll();
        expect(lessons[0].getShortcut()).toBe("PRP");
    });

    test('Sort podla casu 2', () => {
        const newLesson1 = new NewLesson(1, "PRP","Podpora rozhodovacich procesov", "09:15", "10:45");
        const newLesson2 = new NewLesson(2,"MSII", "Management Science II", "11:00", "12:30");
        const newLesson3 = new NewLesson(3, "UIES", "Umela Inteligencia a expertne systemy", "15:15", "16:45");

        lessonService.add(newLesson1);
        lessonService.add(newLesson2);
        lessonService.add(newLesson3);

        const meetings = lessonService.getAll();
        expect(meetings[2].getShortcut()).toBe("UIES");
    });
});