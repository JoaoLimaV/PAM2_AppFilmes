import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public  toastController:  ToastController) {}

          async exibirAlertaFavorito() {
            const alert = await this.alertController.create({
            header: 'Alerta',
            message: 'Deseja realmente adicionar este filme aos <strong>favoritos</strong>?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
                text: 'Sim, Adicionar',
                handler: () => {
                  this.apresentarToast();
              }
            }
          ]
        });
              await alert.present();
        }

        async apresentarToast(){
          const toast = await this.toastController.create({
            message: 'Filme adicionado aos favoritos.',
            duration: 2000,
            color: 'success'

          });
          toast.present();
        }

}
