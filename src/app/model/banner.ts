export class Banner {
  id?: number;
  name: string;
  backImage: string;
  photo: string;
  about: string;
  title: string;

  constructor(name: string, backImage: string, photo: string, about: string, title: string) {
    this.name = name;
    this.backImage = backImage;
    this.photo = photo;
    this.about = about;
    this.title = title;
  }
}
