import {Component, OnInit} from '@angular/core';
import test from '../../assets/json/test.json'
import answer from '../../assets/json/test-answer.json'
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {CountService} from '../services/count.service';

@Component({
    selector: 'app-template-task',
    templateUrl: './template-task.component.html',
    styleUrls: ['./template-task.component.scss']
})
export class TemplateTaskComponent implements OnInit {

    test: any = {};
    answer: any = [];
    userAnswer: any = [];
    counter: any = 0;

    constructor(public dialog: MatDialog,
                private countService: CountService) {
    }

    ngOnInit() {
        this.test = test.test;
        this.answer = answer.answer;
    }

    getValue(task, pick) {
        if (this.userAnswer.length === 0) {
            this.userAnswer.push({'name': task, 'answer': pick});
        } else {
            for (let i = 0; i < this.userAnswer.length; i++) {
                if (this.userAnswer[i].name === task) {
                    this.userAnswer[i].answer = pick;
                } else {
                    this.userAnswer.push({'name': task, 'answer': pick});
                    this.userAnswer = this.userAnswer.filter(ans => {
                        if (ans.name !== task || ans.answer === pick) {
                            return ans;
                        }
                    });
                    break;
                }
            }
        }
        // console.log(this.userAnswer);
    }

    stopTest() {
        this.userAnswer.forEach(userAnswer => {
            this.answer.forEach(rightAnswer => {
                if (userAnswer.name === rightAnswer.name && userAnswer.answer === rightAnswer.answer) {
                    this.counter++;
                }
            })
        });
        console.log(this.counter);
        this.openDialog();
        this.userAnswer = [];
    }

    validBtn() {
        if (this.userAnswer.length !== this.answer.length) {
            return true;
        }
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = this.countService.dataTest(this.counter);
        this.dialog.open(ModalWindowComponent, dialogConfig);
    }
}