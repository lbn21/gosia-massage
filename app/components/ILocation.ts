export interface ILocationBasic {
  slug: string;
  name: string;
}

export interface ILocation extends ILocationBasic {
  borough: string;
  image: string;
  content: string;
}
