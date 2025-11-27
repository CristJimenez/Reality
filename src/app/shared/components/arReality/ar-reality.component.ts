import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ar-reality',
  templateUrl: './ar-reality.component.html',
  styleUrls: ['./ar-reality.component.scss'],
  standalone: false,
})
export class ArRealityComponent implements OnInit {
  @Input() scenePath: string = 'assets/ar-scene.html'; 
  arSceneUrl!: SafeResourceUrl; // El tipo ya es SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // La sanitización se hace aquí, convirtiendo el string en SafeResourceUrl
    this.arSceneUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.scenePath);
  }
}
