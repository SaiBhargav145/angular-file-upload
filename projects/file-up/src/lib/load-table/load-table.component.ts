import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-load-table',
  templateUrl: './load-table.component.html',
  styleUrls: ['./load-table.component.css']
})
export class LoadTableComponent {
  // filter?: string;
  @Input() fileDetails:any
  @Input() fileData:any
  @Input() listData:any
  sortProperty: string = 'id';
  sortOrder = 1;

  _filtertext:string=''
  logData(){
    console.log(this.listData.sort())
    console.log(this.fileData)
  }

  get filtertext(){
    return this._filtertext

  }
  set filtertext(value:string){
    this._filtertext=value
    //this.filteredStudents=this.filterstudentBygender(value)
  }


//   sortBy(property: string) {
//     this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
//     this.sortProperty = property;
//     this.listData = [...this.listData.sort((a: any, b: any) => {
//         // sort comparison function
//         let result = 0;
//         if (a[property] < b[property]) {
//             result = -1;
//         }
//         if (a[property] > b[property]) {
//             result = 1;
//         }
//         return result * this.sortOrder;
//     })];
// }

// sortIcon(property: string) {
//   if (property === this.sortProperty) {
//       return this.sortOrder === 1 ? '☝️' : '👇';
//   }
//   return '';
// }
sortBy(field: string) {
  console.log(field)
  this.listData.sort((a:any, b:any) => {
    if (a[field] < b[field]) {
      return -1;
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(this.listData)
}

}
