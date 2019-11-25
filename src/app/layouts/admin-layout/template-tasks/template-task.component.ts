import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {CountService} from '../../../services/count.service';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from "../../../../assets/allTests/test-answer";

@Component({
    selector: 'app-template-task',
    templateUrl: './template-task.component.html',
    styleUrls: ['./template-task.component.scss']
})
export class TemplateTaskComponent implements OnInit, OnDestroy {

    test: any = [];
    nameTest: string = '';
    answer: any = [];
    userAnswer: any = [];
    evaluation: number = 0;
    counter: string = '';
    time: number = 0;
    timer: any;

    constructor(public dialog: MatDialog,
                public router: Router,
                public route: ActivatedRoute,
                private countService: CountService) {
    }

    ngOnInit() {
        window.scroll(0, 0);
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            event.returnValue = '';
        });
        this.test = this.route.snapshot.data['data']['test'];
        this.nameTest = this.route.snapshot.data['data']['title'];
        if (this.test.length === 5){
            this.time = 120;
        } else if (this.test.length === 10){
            this.time = 420;
        } else this.time = (this.test.length * 1.2) * 60;
        Answer.forEach(item => {
            if (item.id === this.route.snapshot.data['data']['id']){
                this.answer = item.answer;
            }
        });
        this.timer = setInterval(() => {
            if (this.time === 0) {
                alert('Час для проходження тесту закінчився');
                this.countService.next = true;
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
            this.counter = count.minutes() + ':' + newSecond;
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
    }

    stopTest() {
        this.countService.next = true;
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
        this.countService.setResultTest(
            {
                id: this.route.snapshot.data['data']['id'],
                userAnswer: this.userAnswer,
                rightAnswer: this.answer,
                test: this.test,
                title: this.route.snapshot.data['data']['title'],
                value: this.countService.dataTest(this.evaluation, this.answer.length)
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
        dialogConfig.data = this.countService.dataTest(this.evaluation, this.answer.length);
        this.dialog.open(ModalWindowComponent, dialogConfig);
    }

    ngOnDestroy(){
        clearInterval(this.timer);
        window.removeEventListener('beforeunload', () => {});
        this.countService.next = false
    }
}
