import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

 
const reactiveForm = new FormGroup({
   firstname: new FormControl('', [Validators.required]),
   lastname: new FormControl(''),
   email: new FormControl(''),
   address: new FormGroup({
     address: new FormControl(''),
     city: new FormControl(''),
     state: new FormControl(''),
   })
 })
  


@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.scss']
})

export class usermanagementscard implements OnInit {
   reactiveForm: any;
   middleName: FormControl<string | null> | undefined;

   ngOnInit() {
         this.reactiveForm.valueChanges.subscribe((x: any) => {
           console.log(x);
         })
         this.reactiveForm.get("address").valueChanges.subscribe((x: any) => {
           console.log(x);
         })
   }
   onClickSubmit(result: { username: string; }) {
      console.log("You have entered : " + result.username); 
   }

   @ViewChild('templateForm') templateForm: NgForm | undefined;

    
onSubmit() {
   console.log(this.reactiveForm.value);
 }

 addControl() {
   this.middleName = new FormControl('', [Validators.required]);
   this.reactiveForm.addControl("middleName",this.middleName);
 }
 
 registerControl() {
   this.middleName = new FormControl('', [Validators.required]);
   this.reactiveForm.addControl("middleName",this.middleName);
 }

 remodeControl() {
   this.reactiveForm.removeControl("middleName");
 }

 setControl() {
   this.middleName = new FormControl('test', [Validators.required]);
   this.reactiveForm.setControl("middleName",this.middleName);
 }

 containsControl() {
   console.log(this.reactiveForm.contains("middleName"));
 }
 
 markCityAsTouched() {
   this.reactiveForm.get("address").get("city").markAsTouched();
 }

 markAllAddressTouched() {
   this.reactiveForm.get("address").markAllAsTouched();
 }

 markCityAsUnTouched() {
   this.reactiveForm.get("address").get("city").markAsUntouched();
 }

 markFormAsDirty() {
   this.reactiveForm.markAsDirty();
 }

 markFormAsPristine() {
   this.reactiveForm.markAsPristine();
 }

 markAddressAsPendng() {
   this.reactiveForm.get("address").markAsPending({emitEvent:false});
 }
 
 disableAll() {
   this.reactiveForm.disable();
 }

 enableAll() {
   this.reactiveForm.enable();
}
 
clearValidation() {
   this.reactiveForm.get("address").clearValidators();
   this.reactiveForm.get("address").updateValueAndValidity();
}

getErrors() {
 
   const controlErrors: ValidationErrors = this.reactiveForm.errors;
   if (controlErrors) {
     Object.keys(controlErrors).forEach(keyError => {
       console.log("firtname "+ ' '+keyError);
     });
   }
 }
  
 setErrors() {
   this.reactiveForm.setErrors( {customerror:'custom error'});
 }

 

}


