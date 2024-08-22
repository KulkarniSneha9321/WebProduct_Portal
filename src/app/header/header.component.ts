import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string ='';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(){
    this.searchEvent.emit(this.searchQuery);
  }

}
