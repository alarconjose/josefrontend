export class Educacion {
  id?: number;
  image: string;
  school: string;
  title: string;
  date: string;
  description: string;


  constructor(image: string, school: string, title: string, date: string, description: string) {
    this.image = image;
    this.school = school;
    this.title = title;
    this.date = date;
    this.description = description;;
  }
}
