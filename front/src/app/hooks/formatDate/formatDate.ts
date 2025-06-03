import "moment/locale/pt-br";
import moment from "moment";
export interface IFormatDate {
  exec(date: string): string;
}

export class FormatDate implements IFormatDate {
  exec(date: string): string {
    return moment(date).format("MM/DD/YYYY");
  }
}
