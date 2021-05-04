import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { StopSupplyUI } from "./models/stop-supply.ui";

@Component({
    selector: 'everis-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements OnInit {

    //percentCircleProgress: number = 50;

    // @Input() percentCircleProgressAnterior;

    @Output() supplyComplete = new EventEmitter<boolean>();
    @Output() stopSupply = new EventEmitter<StopSupplyUI>();

    private _percentCircleProgress: number;
    @Input('percentCircleProgress')
    set percentCircleProgress(value: number){
        this._percentCircleProgress = value;


        if(value === 30) {
            this.stopSupply.emit({
                stop: true,
                message: 'Circle Progress Detenido'
            });
        }

        // if(value === 100) {
        //     this.supplyComplete.emit(true);
        // } else {
        //     this.supplyComplete.emit(false);
        // }
    }
    get percentCircleProgress(){
        return this._percentCircleProgress;
    }

    ngOnInit() {}
}