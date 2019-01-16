import { Component }  from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';

interface Serie {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  series: SelectItem[];    
  dramas: Serie[];
  comedias: Serie[];
  
  selectedDrama: Serie;  
  selectedComedia: Serie; 

  constructor() {
      //SelectItem API with label-value pairs
      this.series = [
          {label:'Seleccione Serie', value:null},
          {label:'Master Of None', value:{id:1, name: 'New York', code: 'NY'}},
          {label:'Westworld', value:{id:2, name: 'Rome', code: 'RM'}},
          {label:'This Is Us', value:{id:3, name: 'London', code: 'LDN'}},
          {label:'Arrested Development', value:{id:4, name: 'Istanbul', code: 'IST'}},
          {label:'The Terror', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];
      
      //Series Drama
      this.dramas = [
          { name: 'The Leftovers', code: 'NY' },
          { name: 'The Wire', code: 'RM' },
          { name: 'Breaking Bad', code: 'LDN' },
          { name: 'The Americans', code: 'IST' },
          { name: 'Game Of Thrones', code: 'PRS' }
      ];

      //Series Comedia
      this.comedias = [
        { name: 'The Big Bang Theory', code: 'NY' },
        { name: 'How I Met Your Mother', code: 'RM' },
        { name: 'Silicon Valley', code: 'LDN' },
        { name: 'Married With Children', code: 'IST' },
        { name: 'Friends', code: 'PRS' }
    ];

  }
}
