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

  async ngOnInit() {
    // const perm = await Permissions.request({ name: 'camera' });

    // if (perm.state !== 'granted') {
    //   alert('Necesitas habilitar la cámara para usar la realidad aumentada');
    //   return;
    // }
  }

  public async close() {
    await this.modalController.dismiss();
    // this.router.navigate(['/home']);
  }

}
