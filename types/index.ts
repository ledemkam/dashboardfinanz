export type Entry = {
    id : string
    type : string
    amount : number
    category : string
    frequency : string
    createdAt : Date
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

export type EntryListProps = {
    entries : Entry[],
    onDeleteEntry : (id : string) => Promise<void>
    isLoading : boolean
}

export type SummaryCardProps = {
    title : string,
    value : number | string,
    isLoading : boolean,
    borderColor : string,
    textColor : string
}

