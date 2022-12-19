# University Timetable
System je funkčný rozvrh hodín ktorý ich vie vypisovať všetky, osobitne na každý  deň, a zároveň umožňuje vidieť voľné
časové sloty, do ktorých je možno vkladať nové hodiny. Systém pracuje s detailnými časovými intervalmi v minútach pre funkčnosť konvertovanými do typu string.


---
### Healthcheck
_https://localhost:3000/_

---
### GET
- View of entire timetable:
  _https://localhost:3000/timetable_
- View of timetable for each day:
  _https://localhost:3000/timetable/:day_
- View of available timeslots for each day:
  _http://localhost:3000/open-slots/:day_
---
### POST - _Add new lessons into the timetable_
_https://localhost:3000/timetable/:day_
- Creating a new lesson will make the timeslots for the duration unavailable.
- Default lesson length is set at 90 minutes, unless defined otherwise, in which case the duration can be chosen.
- There is an additional minute added to each lesson's duration for better functionality, thanks to which if a lesson ends at i.e. 12:30, this way
the 12:30 slot will also still show as unavailable. The logic of that as well as the 15 minute intervals comes from the idea that there are at least 15 minute breaks between lessons.
---