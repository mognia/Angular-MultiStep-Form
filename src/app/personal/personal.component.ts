import { Component, OnInit,HostListener }   from '@angular/core';
import { Router }              from '@angular/router';

import { Personal }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import { MatButtonModule,MatFormFieldModule,MatInputModule } from "@angular/material";

import {FormControl, Validators,FormsModule} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
    
    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    pillTitle:any;
    btnNextVal:any;
    movingTab:any;
    btnNext:string='NEXT';
    btnPre:any;
    pill = 'ABOUT'
    @HostListener('window:resize', ['$event'])
    sizeChange(event) {
      this.sizeCheck();
    }
    constructor(private router: Router, private formDataService: FormDataService) {


    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
        this.pillTitle=document.querySelector('.pill');
        this.pillTitle.innerHTML=this.pill;
        this.movingTab = document.querySelector('.moving-tab');
        this.btnNextVal = document.querySelector('.btn-next');
        this.btnPre = document.querySelector('.btn-pre');
        this.btnPre.style="visibility:hidden";
        this.btnNextVal.value=this.btnNext;
        this.sizeCheck();
    }

    sizeCheck(){

        if(window.matchMedia('(min-width: 992px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(-1vw, 0px, 0px)";      
        }
        else if(window.matchMedia('(min-width: 576px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(12vw, 0px, 0px)";
        }
        else if(window.matchMedia('(max-width: 768px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(-4vw, 0px, 0px)";
        }       
    }
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        console.log(form);
        
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    }
}