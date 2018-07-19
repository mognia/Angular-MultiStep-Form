import { Component, HostListener,OnInit } from '@angular/core';
import { FormDataService }     from '../data/formData.service';
@Component ({
    selector: 'msw-navbar'
    ,templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
    movingTab:any;
    DesktopSize:any=window.matchMedia('(min-width: 992px)');
    MobileSize:any=window.matchMedia('(min-width: 576px)');
    TabletSize:any=window.matchMedia('(max-width: 768px)');
    constructor( private formDataService: FormDataService) {

    }
    ngOnInit(){

    }

    Tab1(){

        this.movingTab = document.querySelector('.moving-tab');

        if(this.DesktopSize.matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(-1vw, 0px, 0px)";      
        }
        else if(this.MobileSize.matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(12vw, 0px, 0px)";
        }
        else if(this.TabletSize.matches){
            this.movingTab.style.transform="";
            this.movingTab.style.transform="translate3d(-4vw, 0px, 0px)";
        }

        this.movingTab.style.backgroundColor="#e91e63";
    }
    Tab2(){
        if(this.formDataService.isPersonalFormValid){
            this.movingTab = document.querySelector('.moving-tab');

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
            }        }

    }
    Tab3(){
        if(this.formDataService.isWorkFormValid){
            this.movingTab = document.querySelector('.moving-tab');
            if(this.DesktopSize.matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(31vw, 0px, 0px)";      
            }
            else if(this.MobileSize.matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(52vw, 0px, 0px)";
            }
            else if(this.TabletSize.matches){
                this.movingTab.style.transform="";
                this.movingTab.style.transform="translate3d(61vw, 0px, 0px)";
            }
        }

    }

}