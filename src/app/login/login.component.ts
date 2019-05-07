import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }
  username ="";
  password = "";
  ngOnInit() {}

  doLogin(){
    if(this.username == this.password){
      this.router.navigate(['/dashboard']);
    }
   else {
    this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Subtitle',
      message: 'Incorrect Username/Password',
      buttons: ['OK']
    });

    await alert.present();
  }
}
