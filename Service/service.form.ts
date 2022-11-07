
    import { Component, OnInit } from '@angular/core';  
    import { FormBuilder } from '@angular/forms';  
      
    @Component({  
      selector: 'app-test',  
      templateUrl: './test.component.html',  
      styleUrls: ['./test.component.css']  
    })  
      
    export class serviceform implements OnInit {  
      registrationForm: any;  
      graduationData: any;  
      pgData: any;  
      sampleData: any;  
      constructor(private fb: FormBuilder) {  
        this.registrationForm = this.fb.group({  
          userName: [''],  
          password: [''],  
          email: [''],  
          phone: [''],  
          address: this.fb.group({  
            country: [''],  
            state: [''],  
            city: [''],  
            pin: ['']  
          }),  
          qualification: this.fb.group({  
            graduation: [''],  
            pg: ['']  
          })  
        });  
       }  
      
      ngOnInit() {  
        this.graduationData = ['Select', 'BCA', 'BBA', 'BE', 'B.Tech', 'B.Sc'];  
        this.pgData = ['Select', 'MCA', 'MBA', 'M.Tech', 'M.Sc'];  
        this.sampleData = {  
          userName: 'username',  
          password: 'password',  
          email: '123200011@gmail.com',  
          phone: '9999999999',  
          address: {  
            country: 'Indonesia',  
            state: 'sleman',  
            city: 'yokyakarta',  
            pin: '211001'   
          },  
          qualification: {  
            graduation: 'B.Sc',  
            pg: 'MCA'  
          }  
        };  
        setTimeout(() => this.registrationForm.patchValue(this.sampleData), 5000);  
      }  
    }  
