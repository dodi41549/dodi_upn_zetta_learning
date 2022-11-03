import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.scss']
})

export class usermanagementscard implements OnInit {

   ngOnInit() {
   }
   onClickSubmit(result: { username: string; }) {
      console.log("You have entered : " + result.username); 
   }
}

import { FormGroup, FormControl } from '@angular/forms';
