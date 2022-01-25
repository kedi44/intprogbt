import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { soru } from '../models/soru';
import { FirebasedbService } from '../service/firebase.service';
@Component({
  selector: 'app-sorusilme',
  templateUrl: './sorusilme.component.html',
  styleUrls: ['./sorusilme.component.css']
})
export class SorusilmeComponent implements OnInit {
sorular: soru[];
  constructor(
    public fbServis : FirebasedbService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.KayitListele();
  }

  KayitListele() {
    this.fbServis.SoruListele().snapshotChanges().subscribe(data => {
      this.sorular = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.sorular.push(y as soru);
      });
    });
  }
  Sil(soru:soru){
    this.fbServis.SoruSil(soru.key).then(d => {
      this.router.navigate(['sorular']);
    });

  }
}
