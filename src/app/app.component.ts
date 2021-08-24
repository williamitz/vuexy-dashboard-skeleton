import { Component, OnInit } from '@angular/core';
import { dasTheme } from './interfaces/dashTheme.interface';
import { CoreLoadingScreenService } from './services/loading-screen.service';
import { StorageService } from './services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bingo-xd';


  constructor( private _loadingScr: CoreLoadingScreenService, private st: StorageService) {
    
  }

  ngOnInit() {
    
    this.st.onLoadTheme();
    let htmlEl = document.getElementById('htmlApp');
    if (this.st.theme == dasTheme.LIGHT) {
      htmlEl.classList.remove('dark-layout');
      htmlEl.className += ' light-layout';
    } else {
      htmlEl.classList.remove('light-layout');
      htmlEl.className += ' dark-layout';
    }
    
    this._loadingScr.hide();
    

  }

}
