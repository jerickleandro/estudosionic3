import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Erick Leandro",
    data: "November 5, 2018",
    descricao:"Este é o novo app do Erick",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago teste"
}


  public nomeUsuario:string = "José Erick Leandro";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }
  
  public somaDeDoisNumeros (num1:number,num2:number):void{
   // alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        console.log(data);
      },error=> {
        console.error(error);
      }
      
    )
  }

}
