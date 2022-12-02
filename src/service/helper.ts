export abstract class Helper {

   static arrayIdSearch(data: any[], id: string|number): number {
        const index = data.findIndex((x: { getId: () => number; }) => x.getId() === Number(id));
        return index;
   }

   static getNextId(data: any[]): number {
      const id = data[data.length - 1].getId() + 1;
      return id;
   }

   static getObject(data: any[], id: string|number): any {
      const obj = data.filter(obj => obj.getId() == Number(id));
      return obj;
   }

}