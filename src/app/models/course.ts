export class Course {
  constructor(public name: string,
    public type: CourseType,
    public price: number,
    public discountedprice: number,
    public description: string,
    public displaytest: string,
    public imageUrl: string) { }
}

export enum CourseType {
  PROJECTMANAGMENT = 'PROJECTMANAGMENT',
  QUALITYMANAGMENT = 'QUALITYMANAGMENT',
  BIGDATAANALYTICS = 'BIGDATAANALYTICS',
  CLOUDCOMPUTING = 'CLOUDCOMPUTING',
  ITSERVICEANDARCHITECTURE = 'ITSERVICEANDARCHITECTURE',
  AGILEANDSCRUM = 'AGILEANDSCRUM',
  DIGITALMARKETING = 'DIGITALMARKETING',
  STOCKMARKET = 'STOCKMARKET'
}
