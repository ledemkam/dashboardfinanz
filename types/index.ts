export type Entry = {
    id : string
    type : string
    amount : number
    category : string
    frequency : string
    createdAt : Date
}
export type Props = {
  readonly  entries: Entry[]
  }

export interface EntriesProps {

    // other properties
  
    onAddEntry: (
        entry: { 
            type: string;
            amount: number;
            category: string; 
            frequency: string
        }) => void;
  }
  

export type EntryFormProps = {
    onAddEntry : (entry : Entry) => Promise<void>
}



  

export type SummaryCardProps = {
    title : string,
    value : number | string,
    isLoading : boolean,
    borderColor : string,
    textColor : string
}


export interface EntryListProps {

    readonly entries: ReadonlyArray<Entry>;
  
    readonly isLoading: boolean;
  
    readonly onDeleteEntry: (id: string) => void;
  
  }

