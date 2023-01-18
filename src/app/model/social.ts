export class Social {
  id? : number;
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }  
}
