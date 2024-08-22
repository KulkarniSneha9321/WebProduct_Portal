import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<{price?: number; seller?:string; rating?: number}>();
  onFilterChange(type: string,value:any):void{
    const criteria={[type]:value};
    this.filterChange.emit(criteria);
  }

}
