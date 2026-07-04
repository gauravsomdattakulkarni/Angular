import { Component, OnInit } from '@angular/core';
import {List} from '../list/list';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  name = "";

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    // alert("Welcome Component is loaded");
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }


}
