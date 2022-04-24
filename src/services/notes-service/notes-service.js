export default class NotesService {
    constructor() {
        // this.notesList = {};
        this.notesList = {
            '1': {
                id: 1,
                title: 'First',
                content: 'In 2005 after The Get Up Kids split up, lead singer Matt Pryor turned his focus on his other band The New Amsterdams and, primarily, his children. The main reason The Get Up Kids split up was due to Pryor\'s disenfranchisement with touring, and his desire to spend more time with his children.'
            },
            '2': {
                id: 2,
                title: 'Second',
                content: 'He was born on February 6, 1904, in New York City. He was an Assistant United States Attorney from 1930 to 1936, and a special assistant to the U.S. Attorney General from 1937 to 1940.[1]\n' +
                    '\n' +
                    'In November 1952, Tompkins defeated the incumbent Democratic Senator Frank D. O\'Connor in the 6th senatorial district, and was a member of the New York State Senate (6th D.) in 1953 and 1954. He was Chairman of a Joint Legislative Committee on Charitable and Philanthropic Agencies and Organizations (the "Tompkins Committee") which investigated fund-raising practices in New York. The findings of the committee led to enacting a law that required registration and reporting by fund-raising organizations and individuals.'
            },
            '3': {
                id: 3,
                title: 'Third',
                content: 'Located approximately eight miles south of Okmulgee and six miles north of Henryetta in Okmulgee County, just off U.S. routes 75 and 62, the original name of the town may have been Winchell.[6] The town was added along the route of the St. Louis, Oklahoma and Southern Railway (later the St. Louis–San Francisco Railway, or Frisco) built between Okmulgee and Henryetta in 1900.[6] The post office built in August 1903 was named for Matt Schulter, said to be a resident of St. Louis, Missouri.'
            },
            '4': {
                id: 4,
                title: 'Fourth',
                content: 'Rewrite is a Japanese visual novel developed by Key, a brand of VisualArt\'s. It was released on June 24, 2011 for Windows PCs and is rated for all ages. Rewrite is Key\'s ninth game, along with other titles such as Kanon, Air, and Clannad. Key released a fan disc expanding on the game\'s story titled Rewrite Harvest festa! on July 27, 2012 for Windows.'
            },
            '5': {
                id: 5,
                title: 'Fifth',
                content: 'The Focke-Wulf Fw 43 Falke (German: "Falcon") - known internally to Focke-Wulf as the A 43 - was a light utility aircraft developed in Germany in 1932. The last project undertaken by the company under the technical direction of Henrich Focke, it was a high-wing strut-braced monoplane of conventional design, with fixed tailwheel undercarriage. The pilot and two passengers sat in a fully enclosed cabin. Only a single example was built.'
            }
        };
    }

    addNote(id, note) {
        this.notesList[id] = note;
    }

    deleteNote(id) {
        delete this.notesList[id];
    }

    generateId() {
        const id = Math.floor(Math.random() * 1000000);
        if(!this.notesList[id]){
            return id.toString();
        }
        return this.generateId();
    }
}