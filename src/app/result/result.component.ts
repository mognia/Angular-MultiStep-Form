import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    movingTab:any;
    pillTitle:any;
    pill:'Finish';
    
    constructor(private formDataService: FormDataService) {
        this.pillTitle=document.querySelector('.pill');
        this.pillTitle.innerHTML=this.pill;
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
        this.movingTab = document.querySelector('.moving-tab');
        this.movingTab.style.transform="translate3d(43vw, 0px, 0px)";
        this.movingTab.style.backgroundColor="#1ee92e";
    }

    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
