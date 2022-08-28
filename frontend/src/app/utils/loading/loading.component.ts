import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  public show: boolean = true;
  @Input() set showLoadingInput(value: boolean) {
    this.show = value;
  }

  constructor() {}
}
