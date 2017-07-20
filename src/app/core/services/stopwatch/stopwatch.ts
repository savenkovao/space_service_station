import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StopWatchService } from './stopwatch.service';

@Component({
    selector: 'stopwatch',
    template:
        `
        <div class="container">
          <h1>{{ formatTime(time) }}</h1>
          <div class="btn-group">
            <button (click)="toggle()">
              <span *ngIf="!started">Start</span>
              <span *ngIf="started">Pause</span>
            </button>
          </div>
        </div>
        `,
    // styleUrls: ['./stopwatch.css']
})

export class StopWatchComponent {
    public started: boolean;
    public time: number;
    public autoStart= false;

    private timer: any;

    constructor(public stopwatchService: StopWatchService) {
        this.stopwatchService = stopwatchService;
        this.time = 0;
        this.started = false;
        if (this.autoStart) {
          this.start();
        }
    }

    formatTime(timeMs: number) {
        let minutes: string,
            seconds: string;

        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed(3);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    }

    getUpdate() {
        let self = this;

        return () => {
            self.time = this.stopwatchService.time();
        };
    }

    lap() {
        this.update();

        if (this.time) {
            this.stopwatchService.lap();
        }
    }

    reset() {
        this.stopwatchService.reset();
        this.started = false;
        this.update();
    }

    start() {
        this.timer = setInterval(this.getUpdate(), 1);
        this.stopwatchService.start();
    }

    stop() {
        clearInterval(this.timer);
        this.stopwatchService.stop();
    }

    toggle() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }

        this.started = !this.started;
    }

    update() {
        this.time = this.stopwatchService.time();
    }

    onClick() {
        console.log(this.stopwatchService);
    }
}

@NgModule({
  imports: [BrowserModule],
  exports: [StopWatchComponent],
  declarations: [StopWatchComponent]
})

export class StopWatchModule {
  static forRoot() {
    return {
      ngModule: StopWatchModule,
      providers: [StopWatchService],
    };
  }
}
