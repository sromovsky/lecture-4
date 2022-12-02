import { DateTimeFormatter, Duration, LocalDateTime } from "@js-joda/core";

export abstract class DateTimeParser {

    static prettyPrintDateTime(dateTime: LocalDateTime): string {
         const index = dateTime.format(DateTimeFormatter.ofPattern('dd.MM.yyyy @ HH:mm'))
         return index;
    }

    static prettyPrintDuration(duration: Duration): string {
          const strUnit = duration.toString().charAt(duration.toString().length - 1);
          const strDuration = duration.toString().slice(2, -1);
          var finalString = "";
          switch(strUnit) {
               case("H"):
                    finalString = `${strDuration} Hours`;
                    break;
               case("M"):
                    finalString = `${strDuration} Minutes`
                    break;
          }
          return finalString;
    }
 
 }