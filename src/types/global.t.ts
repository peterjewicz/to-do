export {};

declare global {
   interface Column {
     id: number;
     name: string;
   }

   interface Card {
     id: number,
     date: string;
     name: string;
     minutes: number;
   }
}
