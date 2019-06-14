import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalLoginComponent} from './modal-login/modal-login.component';

export interface DialogData {
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    name: any = '';
    userData: any;
    constructor(public dialog: MatDialog){
    }

    ngOnInit(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(this.userData == null) {
            const dialogRef = this.dialog.open(ModalLoginComponent, {
                width: '400px',
                data: {name: this.name}

            });

            dialogRef.afterClosed().subscribe(result => {
                this.name = result;
                console.log(this.name);
                if(this.name != null){
                    this.setLocalData(this.name);
                }
            });
        }

    }

    setLocalData(userName){
        let data = {
            firstName: userName,
            lastName: '',
            city: '',
            university: '',
            email: '',
            phone: ''
        };
        localStorage.setItem('user', JSON.stringify(data));
    }
}
