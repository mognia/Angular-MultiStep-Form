import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

import { Register } from '../data/formData.model';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-work'
    , templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    pill = 'account'
    Register: Register;
    form: any;
    movingTab: any;
    btnNextVal: any;
    btnNext: string = 'NEXT';
    pillTitle: any;
    passField:any;
    barText:any;
    result:any;
    passStatus:string='';
    
    @HostListener('window:resize', ['$event'])
    sizeChange(event) {
        this.sizeCheck();
    }
    constructor(private router: Router, private formDataService: FormDataService) {
        this.pillTitle = document.querySelector('.pill');
        this.pillTitle.innerHTML = this.pill;
    }

    ngOnInit() {
        this.Register = this.formDataService.getReg();
        console.log('Work feature loaded!');
        this.movingTab = document.querySelector('.moving-tab');
        this.btnNextVal = document.querySelector('.btn-next');
        this.passField = document.querySelector('.pass');
        this.barText=document.querySelector('.bar-text');
        this.result=document.querySelector('.password-strength')
        this.btnNextVal.value = this.btnNext;
        this.sizeCheck();

    }
    checkStrength(password){
      console.log(password.length);
      
    //initial strength
    var strength = 0
    
    if (password.length == 0) {
        this.result.classList.remove('normal','medium');
        this.result.classList.add('');
        this.passStatus= '';
    }
    //if the password length is less than 7, return message.
    if (password.length <= 3) {
        this.result.classList.remove('strong','vstrong','medium');
        this.result.classList.add('normal');
        this.passStatus= 'Normal';
    }
 
    //length is ok, lets continue.
 
    //if length is 8 characters or more, increase strength value
    if (password.length > 9) strength += 1
 
    //if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
 
    //if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
 
    //if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
 
    //now we have calculated strength value, we can return messages
 
    //if value is less than 2

    if (strength < 2) {
        this.result.classList.remove('strong','vstrong','normal');
        this.result.classList.add('medium');
        this.passStatus= 'Medium';
    } else if (strength == 2 ) {
        this.result.classList.remove('medium','vstrong','normal');
        this.result.classList.add('strong');
        this.passStatus= 'Strong';
    } else {
        this.result.classList.remove('medium','strong','normal');
        this.result.classList.add('vstrong');
        this.passStatus= 'Very Strong';
    }
        
    }
    sizeCheck() {

        if (window.matchMedia('(min-width: 992px)').matches) {
            this.movingTab.style.transform = "";
            this.movingTab.style.transform = "translate3d(14vw, 0px, 0px)";
        }
        else if (window.matchMedia('(min-width: 576px)').matches) {
            this.movingTab.style.transform = "";
            this.movingTab.style.transform = "translate3d(36vw, 0px, 0px)";
        }
        else if (window.matchMedia('(max-width: 768px)').matches) {
            this.movingTab.style.transform = "";
            this.movingTab.style.transform = "translate3d(25vw, 0px, 0px)";
        }
    }

    showPass(){
        if(this.passField.type=='password'){
            this.passField.type='text';
        }
        else if(this.passField.type=='text'){
            this.passField.type='password';
        }
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setReg(this.Register);


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