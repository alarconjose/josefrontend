export class Laboral {
  id? : number;
  image: string;
  name: string;
  title: string;
  date: string
  description: string;

  constructor(image: string,name: string,  title: string, date: string, description: string) {
    
    this.image = image;
    this.name = name;
    this.title = title;
    this.date = date;    
    this.description = description;   
  }
}
