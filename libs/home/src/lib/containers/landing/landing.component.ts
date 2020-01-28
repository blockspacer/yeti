import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IdleMonitorService } from '@scullyio/ng-lib';

@Component({
  selector: 'yeti-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  // TODO remove IdleMonitorService
  constructor(private idle: IdleMonitorService) {}

  ngOnInit() {}

  loginWithGoogle() {
    // this.authService.loginWithGoogle();
  }
}
