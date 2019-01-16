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
  cities2: Serie[];
  selectedSerie: Serie;  

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
      
      //An array of cities
      this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }
}
