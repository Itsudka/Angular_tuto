import { ChangeDetectionStrategy, Component, signal, } from "@angular/core";


@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor(){
    setInterval(()=> {
      this.counter += 1;
    }, 2000);
  }
  increaseby(value: number) {
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
