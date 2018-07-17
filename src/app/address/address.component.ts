import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Address }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: './address.component.html'
})


export class AddressComponent implements OnInit {
    title = 'Where do you live?';
    pill='Address'
    address: Address;
    form: any;
    movingTab:any;
    btnNextVal:any;
    btnNext:string='FINISH';
    pillTitle:any;
    cities:Object;
    constructor(private router: Router, private formDataService: FormDataService) {
        this.pillTitle=document.querySelector('.pill');
        this.pillTitle.innerHTML=this.pill;
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
        this.movingTab = document.querySelector('.moving-tab');
        this.movingTab.style.transform="translate3d(52vw, 0px, 0px)";
        this.btnNextVal = document.querySelector('.btn-next');
        this.btnNextVal.value=this.btnNext;
        this.sizeCheck();
        this.cities= [
            {value: 'tehran'},
            {value: 'London'},
            {value: 'Paris'},
            {value: 'Paris'}
          ];
    }
    sizeCheck(){

        if(window.matchMedia('(min-width: 992px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(31vw, 0px, 0px)";      
        }
        else if(window.matchMedia('(min-width: 576px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(60vw, 0px, 0px)";
        }
        else if(window.matchMedia('(max-width: 768px)').matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(50vw, 0px, 0px)";
        }       
    }
    save(form: any): boolean {
        // if (!form.valid) {
        //     return false;
        // }
            
        this.formDataService.setAddress(this.address);
        return true;
    }

    goToPre() {

            // Navigate to the work page
            this.router.navigate(['/work']);
        
    }

    goToNext(form: any) {
        if (this.save(form)) {
        alert('You Finished The Form Succesfully!');
        }
    }
}