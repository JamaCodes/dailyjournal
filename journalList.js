import { journal } from "./journal.js";

export const journalList = () =>
{ const allEntries = getJournalEntries();
let htmlString = "";
for (const journalObj of allEntries){
    htmlString += journal(obj)
}

return htmlString;
}