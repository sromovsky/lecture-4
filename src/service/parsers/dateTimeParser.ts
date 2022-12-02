import { DateTimeFormatter, Duration, LocalDate, LocalDateTime } from "@js-joda/core";

export abstract class DateTimeParser {

     static prettyPrintDateTime(dateTime: LocalDateTime): string {
          const index = dateTime.format(DateTimeFormatter.ofPattern('dd.MM.yyyy @ HH:mm'))
          return index;
     }

     static prettyPrintDuration(duration: Duration): string {
          const strUnit = duration.toString().charAt(duration.toString().length - 1);
          const strDuration = duration.toString().slice(2, -1);
          var finalString = "";
          switch (strUnit) {
               case ("H"):
                    if (strDuration == "1") {
                         finalString = `${strDuration} Hour`;
                    } else {
                         finalString = `${strDuration} Hours`;
                    }
                    break;
               case ("M"):
                    if (strDuration == "1") {
                         finalString = `${strDuration} Minute`;
                    } else {
                         finalString = `${strDuration} Minutes`;
                    }
                    break;
          }
          return finalString;
     }

     static parseDateTime(date: string, time: string): LocalDateTime {
          const time_arr: String[] = time.split(":");
          var hours: String = "";
          var minutes: String = time_arr[1];
          var day: String = "";
          var month: String = "";
          if (time_arr[0].length == 1) {
               hours = "0" + time_arr[0];
          } else {
               hours = time_arr[0];
          }
          const date_arr: String[] = date.split(".");
          if (date_arr[0].length == 1) {
               day = "0" + date_arr[0];
          } else {
               day = date_arr[0];
          }
          if (date_arr[1].length == 1) {
               month = "0" + date_arr[1];
          } else {
               month = date_arr[1];
          }
          const year: String = date_arr[2];
          const parsedDateTime: LocalDateTime = LocalDateTime.parse(`${year}` + "-" + `${month}` + "-" + `${day}` + "T" + `${hours}` + ":" + `${minutes}`);
          return parsedDateTime;
     }

     static parseDuration(duration: string): Duration | null {
          const duration_arr: string[] = duration.split(" ");
          const num: number = Number(duration_arr[0]);
          const unit: string = duration_arr[1];
          if (unit == "hour" || unit == "hours") {
               return Duration.ofHours(num);
          } else if (unit == "minute" || unit == "minutes") {
               return Duration.ofMinutes(num);
          } else {
               return null;
          }
     }
}