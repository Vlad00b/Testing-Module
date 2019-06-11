import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    userInfo: FormGroup;
    userData: any = {};


    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.formBuild();
        this.changeData();
    }

    formBuild() {
        this.userInfo = this.fb.group({
            firstName: [''],
            lastName: [''],
            city: [''],
            university: [''],
            email: ['', Validators.email],
            phone: ['']
        });
    }

    changeData() {
        this.userData = JSON.parse(localStorage.getItem('user'));
    }

    editProfile() {
        for (let prop in this.userInfo.value) {
            if (this.userInfo.value.hasOwnProperty(prop)) {
                if (!this.userInfo.value[prop]) {
                    this.userInfo.value[prop] = this.userData[prop];
                    console.log(this.userInfo.value);
                }
            }
        }
        localStorage.setItem('user', JSON.stringify(this.userInfo.value));
        this.changeData();
        this.formBuild();
    }
}
