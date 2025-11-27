import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ARLauncherPage } from '../AR-launcher/ar-launcher.page';
import { Route, Router } from '@angular/router';
import { ArRealityComponent } from 'src/app/shared/components/arReality/ar-reality.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    private readonly modalController: ModalController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  public async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ARLauncherPage,
      // presentingElement: this.routerOutlet.nativeEl,
      initialBreakpoint: 1,
      breakpoints: [0, 1],
      cssClass: 'my-ar-modal',
    });

    return await modal.present();
    // this.router.navigate(['/ar-launcher']);
  }

}
