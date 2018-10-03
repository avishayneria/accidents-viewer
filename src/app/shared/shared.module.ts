import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccidentService} from './services/accident.service';
import { IsTreatedPipe } from './pipes/is-treated.pipe';
import { AccidentsListComponent } from './component/accidents-list/accidents-list.component';
import { AccidentDetailsComponent } from './component/accident-details/accident-details.component';
import { LocaleTimePipe } from './pipes/locale-time.pipe';
import { AgmCoreModule } from '@agm/core';
import { LoaderComponent } from './component/loader/loader.component';
import {GuardService} from './services/guard.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwxgnj0pOJnvtvUR_avWOI9Qvoq_HBa9c'
    })
  ],
  declarations: [
    IsTreatedPipe,
    LocaleTimePipe,
    AccidentsListComponent,
    AccidentDetailsComponent,
    LoaderComponent
  ],
  providers: [AccidentService, GuardService],
  exports: [
    IsTreatedPipe,
    LocaleTimePipe,
    AccidentsListComponent,
    AccidentDetailsComponent,
    LoaderComponent,
  ],
})
export class SharedModule {

}
