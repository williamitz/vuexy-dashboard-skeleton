import { Component, HostBinding, OnInit } from '@angular/core';
import { dasTheme } from 'src/app/interfaces/dashTheme.interface';
import { StorageService } from 'src/app/services/storage.service';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-anavbar',
  templateUrl: './anavbar.component.html',
  styleUrls: ['./anavbar.component.scss']
})
export class AnavbarComponent implements OnInit {

  currentSkin: string;
  coreConfig: any;
  prevSkin: string;

  @HostBinding('class.fixed-top')
  isFixed = false;

  @HostBinding('class.navbar-static-style-on-scroll')
  windowScrolled = false;
  
  themeEnum = dasTheme;

  constructor( public st: StorageService ) { }

  ngOnInit(): void {
    this.st.onLoadTheme();

  }
  
  onChangeTheme() {
    console.log('cambiando tema');
    this.st.onSetTheme( this.st.theme == dasTheme.LIGHT ? dasTheme.DARK : dasTheme.LIGHT );
    let htmlEl = document.getElementById('htmlApp');
    
    if (this.st.theme == dasTheme.LIGHT) {
      htmlEl.classList.remove('dark-layout');
      htmlEl.className += ' light-layout';
    } else {
      htmlEl.classList.remove('light-layout');
      htmlEl.className += ' dark-layout';
    }


  }
  

}
