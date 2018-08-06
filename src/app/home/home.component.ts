import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  primaryDesc: string ="Save over £320 with BT Sport free for 18 months";
  secondDesc: string = "Score a great deal on our Superfast Fibre and get BT Sport free for 18 months when you sign up. What a result.";
  newBt: string = "New to BT?";
  months: string = "18";
  upfrontCost: string = "£19.99";
  btnText: string = "See broadband deals";

}
