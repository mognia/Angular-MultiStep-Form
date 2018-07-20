import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';

/* App Rootng */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';


/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';

import { MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatSelectModule,MatCheckboxModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    BrowserAnimationsModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    ReactiveFormsModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatCheckboxModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService },
                    ],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}