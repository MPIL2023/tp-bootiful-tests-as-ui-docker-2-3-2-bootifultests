import { Component } from '@angular/core';
import { of, tap } from 'rxjs';
import { AdderService } from './adder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  current: number;
  textNumber: number;
  result :number;
  textNumberAcc: number;
  resultAcc :number;

  constructor(private adderService: AdderService) {
    this.current = -1;
    this.textNumber = 0;
    this.result = 0;
    this.textNumberAcc = 0;
    this.resultAcc = 0;
  }

  getCurrentNum() {
      this.adderService.getCurrentNum().subscribe((value) => {
        console.log(value);
        this.current = value;
      });
  }
  
  addNum() {
      this.adderService.add(this.textNumber).subscribe((value) => {
        console.log(value);
        this.result = value;
        this.textNumber = 0;
      });
  }
  
  accumulate() {
      this.adderService.accumulate(this.textNumberAcc).subscribe((value) => {
        console.log(value);
        this.resultAcc = value;
        this.textNumberAcc = 0;
      });
  }
}
