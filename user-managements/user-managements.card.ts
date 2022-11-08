import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Pipe, PipeTransform } from '@angular/core';


Pipe({
  name: 'trim',
  pure: false
})

export class TrimPipe implements PipeTransform {
  transform(value: string): any { 
    return value.trim()
  }
  
}

 
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
  
 "name abc".replace(/\s/g, "");

@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.scss']
   
})

@Component({
  selector: 'pipe-builtins',
  template: `<div class="card card-block">
  <h4 class="card-title">Currency</h4>
  <div class="card-text">
    <p ngNonBindable>{{ 1234.56 | currency:'CAD' }}</p>
    <p>{{ 1234.56 | currency:"CAD" }}</p>

    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'code' }}</p>
    <p>{{ 1234.56 | currency:'CAD':'code'}}</p>

    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol' }}</p>
    <p>{{ 1234.56 | currency:'CAD':'symbol'}}</p>

    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol-narrow' }}</p>
    <p>{{ 1234.56 | currency:'CAD':'symbol-narrow'}}</p>
  </div>
</div>

<div class="card card-block">
  <h4 class="card-title">Date</h4>
  <div class="card-text">
    <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p>
    <p>{{ dateVal | date: 'shortTime' }}</p>

    <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>
    <p>{{ dateVal | date: 'fullDate' }}</p>

    <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p>
    <p>{{ dateVal | date: 'shortTime' }}</p>

    <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>
    <p>{{ dateVal | date: 'd/M/y' }}</p>
  </div>
</div>

<div class="card card-block">
  <div class="card-text">
    <h4 class="card-title">DecimalPipe</h4>
    <p ngNonBindable>{{ 3.14159265 | number: '3.1-2' }}</p>
    <p>{{ 3.14159265 | number: '3.1-2' }}</p>

    <p ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}</p>
    <p>{{ 3.14159265 | number: '1.4-4' }}</p>
  </div>
</div>

<div class="card card-block">
  <h4 class="card-title">JsonPipe</h4>
  <div class="card-text">
    <p ngNonBindable>{{ jsonVal }}</p>
    <p>{{ jsonVal }}</p>

    <p ngNonBindable>{{ jsonVal | json }}</p>
    <pre>{{ jsonVal | json }}</pre>
  </div>
</div>


<div class="card card-block">
  <h4 class="card-title">LowerCasePipe</h4>
  <div class="card-text">
    <p ngNonBindable>{{ 'ASIM' | lowercase }}</p>
    <p>{{ 'ASIM' | lowercase }}</p>
  </div>
</div>

<div class="card card-block">
  <h4 class="card-title">UpperCasePipe</h4>
  <div class="card-text">
    <p ngNonBindable>{{ 'asim' | uppercase }}</p>
    <p>{{ 'asim' | uppercase }}</p>
  </div>
</div>

<div class="card card-block">
  <h4 class="card-title">PercentPipe</h4>
  <div class="card-text">
    <p ngNonBindable>{{ 0.123456 | percent }}</p>
    <p>{{ 0.123456 | percent }}</p>

    <p ngNonBindable>{{ 0.123456 | percent: '2.1-2' }}</p>
    <p>{{ 0.123456 | percent: '2.1-2' }}</p>

    <p ngNonBindable>{{ 42 | percent: '10.4-4' }}</p>
    <p>{{ 0.123456 | percent : "10.4-4" }}</p>
  </div>
</div>

<div class="card card-block">
  <h4 class="card-title">SlicePipe</h4>
  <div class="card-text">
    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:1:3 }}</p>
    <p>{{ [1,2,3,4,5,6] | slice:1:3 }}</p>

    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:2 }}</p>
    <p>{{ [1,2,3,4,5,6] | slice:2 }}</p>

    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:2:-1 }}</p>
    <p>{{ [1,2,3,4,5,6] | slice:2:-1 }}</p>

    <pre ngNonBindable>
&lt;ul&gt;
  &lt;li *ngFor=&quot;let v of [1,2,3,4,5,6] | slice:2:-1&quot;&gt;
    {{v}}
  &lt;/li&gt;
&lt;/ul&gt;
    </pre>

    <ul>
      <li *ngFor="let v of [1,2,3,4,5,6] | slice:2:-1">
        {{v}}
      </li>
    </ul>
  </div>
</div>

 `
})

class PipeBuiltinsComponent {
  private dateVal: Date = new Date();
  private jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

}

@Component({
  selector: 'app',
  template: `
<pipe-builtins></pipe-builtins>
 `
})
class AppComponent {
}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    PipeBuiltinsComponent
  ],
  bootstrap: [AppComponent],
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

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


