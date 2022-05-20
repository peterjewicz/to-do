export {};

declare global {
   interface Column {
     id: number;
     name: string;
   }

   interface Card {
     id: number,
     columnId: number;
     name: string;
     minutes: number;
   }
}
