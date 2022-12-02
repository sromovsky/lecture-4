import { Employee } from "../../model/Employee";

export abstract class InvitedParser {

    static prettyPrintInvited(invitees?: Employee[]): string {
        if(invitees == null || invitees.length == 0) {
            return "No invitees";
        } else {
            var stringBuilder: string = "";
            for(var i = 0; i < invitees.length; i++) {
                var invitee: string = invitees[i].getFirstName() + " " + invitees[i].getLastName();
                if(i == invitees.length-1) {
                    stringBuilder = stringBuilder.concat(invitee);
                } else {
                    stringBuilder = stringBuilder.concat(invitee, ", ");
                }
            }
            return stringBuilder;
        }
    }
 }