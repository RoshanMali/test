import { Component } from '@angular/core';
import {ITab, TABS} from "../constant";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs: ITab[] = TABS
  constructor(private service: TranslocoService) {
  }
  change(event: any) {
    event.checked ? this.service.setActiveLang('es') : this.service.setActiveLang('en');
  }
}
