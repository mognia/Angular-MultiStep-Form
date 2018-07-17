import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    pill='account'
    workType: string;
    form: any;
    movingTab:any;
    btnNextVal:any;
    btnNext:string='NEXT';
    pillTitle:any;

    constructor(private router: Router, private formDataService: FormDataService) {
        this.pillTitle=document.querySelector('.pill');
        this.pillTitle.innerHTML=this.pill;
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
        this.movingTab = document.querySelector('.moving-tab');
        this.btnNextVal = document.querySelector('.btn-next');
        this.btnNextVal.value=this.btnNext;
        this.sizeCheck();
        
    }
    sizeCheck(){

            if(window.matchMedia('(min-width: 992px)').matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(14vw, 0px, 0px)";      
            }
            else if(window.matchMedia('(min-width: 576px)').matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(36vw, 0px, 0px)";
            }
            else if(window.matchMedia('(max-width: 768px)').matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(25vw, 0px, 0px)";
            }       
        }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setWork(this.workType);

        
        return true;
    }

    goToPre() {

            // Navigate to the personal page
            this.router.navigate(['/personal']);

    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    }
}