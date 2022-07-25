export class ButtonClass {
  private id: number;
  private text: string;
  private icon: string;
  constructor(id:number, text:string, icon:string){
    this.id = id;
    this.text = text;
    this.icon = icon;
  }
  getText(): string{
    return this.text;
  }
  getIcon(): string{
    return this.icon;
  }
}
