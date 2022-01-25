import { Uye } from './../models/uye';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebasedbService } from '../service/firebase.service';
@Component({
  selector: 'app-yönetici',
  templateUrl: './yönetici.component.html',
  styleUrls: ['./yönetici.component.css']
})
export class YöneticiComponent implements OnInit {
  uyeler: Uye[];
  constructor(
    public fbServis : FirebasedbService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.KayitListele();
  }

  KayitListele() {
    this.fbServis.UyeListele().snapshotChanges().subscribe(data => {
      this.uyeler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.uyeler.push(y as Uye);
      });
    });
  }
  Sil(uye:Uye){
    this.fbServis.UyeSil(uye.key).then(d => {
      this.router.navigate(['/uyeler']);
    });

  }
}
