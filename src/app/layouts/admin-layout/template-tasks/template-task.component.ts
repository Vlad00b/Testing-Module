import {Component, OnInit} from '@angular/core';
import answer from '../../../../assets/allTests/test-answer.json'
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {CountService} from '../../../services/count.service';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-template-task',
    templateUrl: './template-task.component.html',
    styleUrls: ['./template-task.component.scss']
})
export class TemplateTaskComponent implements OnInit {

    test: any = {};
    nameTest: any = '';
    answer: any = [];
    userAnswer: any = [];
    evaluation: any = 0;
    counter: any = '';
    time: any = 300;

    constructor(public dialog: MatDialog,
                public router: Router,
                public route: ActivatedRoute,
                private countService: CountService) {

    }

    ngOnInit() {
        this.test = this.route.snapshot.data['data']['test'];
        this.nameTest = this.route.snapshot.data['data']['title'];
        this.answer = answer.answer;
        setInterval(() => {
            if (this.time === 0) {
                this.router.navigate(['tests']);
            }
            this.time -= 1;
            let count = moment.duration(this.time, 'seconds');
            let seconds = count.seconds();
            let newSecond;
            if (seconds >= 10) {
                newSecond = seconds.toFixed(0);
            } else {
                newSecond = `0${seconds.toFixed(0)}`;
            }
            this.counter = '0' + count.minutes() + ':' + newSecond;
        }, 1000)
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
        console.log(this.userAnswer);
    }

    stopTest() {
        this.userAnswer.forEach(userAnswer => {
            this.answer.forEach(rightAnswer => {
                if (userAnswer.name === rightAnswer.name && userAnswer.answer === rightAnswer.answer) {
                    this.evaluation++
                }
            })
        });
        this.userAnswer.sort(function (a, b) {
            if(a.name < b.name)
            return -1;
        });
        console.log(this.userAnswer);
        this.countService.setResultTest(
            {
                id: this.route.snapshot.data['data']['id'],
                userAnswer: this.userAnswer,
                rightAnswer: this.answer,
                test: this.test,
                title: this.route.snapshot.data['data']['title'],
                value: this.countService.dataTest(this.evaluation)
            });
        this.openDialog();
        this.userAnswer = [];
    }

    validBtn() {
        if (this.userAnswer.length !== this.answer.length) {
            return true;
        } else return false
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = this.countService.dataTest(this.evaluation);
        this.dialog.open(ModalWindowComponent, dialogConfig);
    }
}
