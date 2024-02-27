import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { FileSizePipe } from './shared/pipes/fileSize.pipe';
import { PlayerFilterPipe } from './shared/pipes/player-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FileSizePipe,
    PlayerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
