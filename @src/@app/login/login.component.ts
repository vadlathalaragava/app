import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  // data = {username:"vivek",password:"vivek"};
  constructor(private router: Router,public alertController: AlertController) { }
 
  ngOnInit() {}
  data = {username:"",password:""};

    onLogin(){
    if(this.data.username == this.data.password){
      this.router.navigate(['/dashboard']);
    }else
     this.presentAlert();
  	
  	}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login',
      message: 'Please enter valid user name and password',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  }





