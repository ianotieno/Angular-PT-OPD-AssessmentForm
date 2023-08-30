import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Assessmentform } from './components/assessment-form/assessment-form';
import { HeaderComponent } from './components/header/header.component';
import { TextComponent } from './components/form/inputs/text/text.component';
import { TextareaComponent } from './components/form/inputs/textarea/textarea.component';
import { GroupedInputsComponent } from './components/form/inputs/grouped-inputs/grouped-inputs.component';
import { InputsComponent } from './components/form/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    Assessmentform,
    HeaderComponent,
    TextComponent,
    TextareaComponent,
    GroupedInputsComponent,
    InputsComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
