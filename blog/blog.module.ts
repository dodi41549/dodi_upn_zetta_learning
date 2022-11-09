import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BlogComponent } from './blog.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [BlogComponent],
    bootstrap: [BlogComponent]
})
export class BlogModule {
    
}