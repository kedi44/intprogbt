import { soru } from './../models/soru';
import { Uye } from './../models/uye';
import { Kayit } from './../models/kayit';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FirebasedbService {

private dbKayit = '/Kayitlar';
private dbUye = '/Uyeler';
private dbSoru = '/Sorular';



kayitRef: AngularFireList<Kayit> = null;
uyeRef: AngularFireList<Uye> = null;
SorukayitRef: AngularFireList<soru> = null;

constructor(

public db: AngularFireDatabase,
public afAuth: AngularFireAuth


)

{

this.kayitRef = db.list(this.dbKayit);

this.uyeRef = db.list(this.dbUye);
this.SorukayitRef = db.list(this.dbSoru);




}

OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }

  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  UyeSil(key: string) {
    return this.uyeRef.remove(key);
  }

  UyeListele() {
    return this.uyeRef;
  }

  KayitListele() {
    return this.kayitRef;
  }
  KayitEkle(k: Kayit) {
    return this.kayitRef.push(k);
  }
  KayitDuzenle(k: Kayit) {
    return this.kayitRef.update(k.key, k);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

KayitListeleByUID(uid: string) {
    return this.db.list("/Kayitlar", q => q.orderByChild("uid").equalTo(uid));
  }


  CevapEkle(k: Kayit) {
    return this.kayitRef.push(k);
  }


  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  SoruEkle(soru: soru) {
    return this.SorukayitRef.push(soru);
  }
  SoruGöster() {
    return this.SorukayitRef;
  }
  SoruSil(key: string) {
    return this.SorukayitRef.remove(key);
  }
  UyeDuzenle(k: Uye) {
    return this.uyeRef.update(k.key, k);
  }
  SoruDuzenle(k: soru) {
    return this.SorukayitRef.update(k.key, k);
  }
  SoruListele() {
    return this.SorukayitRef;
  }
  SoruByKey(key: string) {
    return this.db.object("Sorular/" + key);
  }


}