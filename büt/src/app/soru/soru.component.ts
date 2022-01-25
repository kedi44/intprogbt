import { soru } from './../models/soru';
import { Kayit } from './../models/kayit';
import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '../service/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.css']
})
export class SoruComponent implements OnInit {
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  sorular: soru[];
  secSoru: soru;
  ekleduzenle: boolean = false;


  constructor(
    public router: Router,
    public fbServis : FirebasedbService
    

  ){

   }

  

  
   ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.SoruGöster();

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secSoru.uid = user.uid;
    var tarih = new Date();
    this.secSoru.kayTarih = tarih.getTime().toString();
    this.secSoru.duzTarih = tarih.getTime().toString();
    this.fbServis.SoruEkle(this.secSoru).then(d => {
      this.router.navigate(['/soru']);
    });
  }
  SoruGöster() {
    this.fbServis.SoruGöster().snapshotChanges().subscribe(data => {
      this.sorular = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.sorular.push(y as soru);
      });
    });
  }

  

  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });

  }
}