import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar-launcher',
  templateUrl: './ar-launcher.page.html',
  styleUrls: ['./ar-launcher.page.scss'],
  standalone: false,
})
export class ARLauncherPage implements OnInit {

  constructor(
    private readonly modalController: ModalController,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  public async close() {
    await this.modalController.dismiss();
    // this.router.navigate(['/home']);
  }

}
