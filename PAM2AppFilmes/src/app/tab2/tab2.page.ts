import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from './../models/IFilmes.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'App Filmes';

  listaFilmes: IFilme[] = [
    {
        nome: 'Loki(2021)',
        lancamento:'08/06/2021(BR)' ,
        duracao: '52m',
        classificacao: '81',
        cartaz: '../assets/img/loki.jpg',
        generos: ['Drama', 'Sci-Fi', 'Fantasy']

    },
    {
      nome: 'Invencível(2021)',
        lancamento:'26/03/2021(BR)' ,
        duracao: '45m',
        classificacao: '89',
        cartaz: '../assets/img/invencivel.jpg',
        generos: ['Sci-Fi & Fantasy', 'Animação', 'Action & Adventure', 'Drama']
    },
    {
      nome: 'The Good Doctor: O Bom Doutor (2017)',
        lancamento:'02/09/2020(BR)' ,
        duracao: '43m',
        classificacao: '86',
        cartaz: '../assets/img/doctor.jpg',
        generos: ['Drama']
    }

  ];

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
