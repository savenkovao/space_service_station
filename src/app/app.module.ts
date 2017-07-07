import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StatsBarComponentComponent } from './components/stats-bar-component/stats-bar-component.component';
import { CrashBarComponentComponent } from './components/crash-bar-component/crash-bar-component.component';
import { InfoBarComponentComponent } from './components/info-bar-component/info-bar-component.component';
import { ToolBarComponentComponent } from './components/tool-bar-component/tool-bar-component.component';
import { DialogBarComponentComponent } from './components/dialog-bar-component/dialog-bar-component.component';
import { GamePadComponentComponent } from './components/game-pad-component/game-pad-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsBarComponentComponent,
    CrashBarComponentComponent,
    InfoBarComponentComponent,
    ToolBarComponentComponent,
    DialogBarComponentComponent,
    GamePadComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
