export class Proyecto {
  id?: number;
  image: string;
  name: string;
  date: string;
  description: string;
  url: string;

  constructor(image: string, name: string, date: string, description: string, url: string) {

    this.image = image;
    this.name = name;
    this.date = date;
    this.description = description;
    this.url = url;
  }
}
