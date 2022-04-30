import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{

  ngOnInit(): void {
    this.btnClass = `btn btn-${this.btnClass}`;
  }

  @Input() progressValue: number = 50;
  @Input() btnClass: string = 'btn btn-inverse';
  @Output() progressValueOut: EventEmitter<number> = new EventEmitter();




  public getPercentage() {
    return `${ this.progressValue }%` 
  }

  public changeValue(value: number) {
    if ( this.progressValue + value > 100 ) {
      this.progressValue = 100;
    } else if ( this.progressValue + value < 0 ) {
      this.progressValue = 0;
    } else {
      this.progressValue = this.progressValue + value;
    }
    this.progressValueOut.emit(this.progressValue);
  }

  public onChange(event: number){
    if ( event >= 100 ) {
      this.progressValue = 100;
    } else if (event <= 0) {
      this.progressValue = 0;
    } else {
      this.progressValue = event;
    }
    this.progressValueOut.emit(this.progressValue)
  }
}
