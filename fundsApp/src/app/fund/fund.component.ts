import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  funds: Fund[] = [];

  name: string = "";
  yield: number = 0;

  editName: String = "";
  editYield: number = 0;

  constructor( private fundservice: FundService) { }

  ngOnInit(): void {
    this.getFunds();
  }

  getFunds(){
    this.fundservice.getFunds().subscribe(res => {
      this.funds = res;
    });
  }

  addFund(){
    this.fundservice.createFund({
      name: this.name,
      yield: this.yield
    }).subscribe(res => {
      this.getFunds();
    });
  }

  updateFund(id: number){
    this.fundservice.updateFund({
      name: this.editName,
      yield: this.editYield
    }, id).subscribe(res => {
      this.getFunds();
    });
  }

  deleteFund(id: number){
    this.fundservice.createFund(id).subscribe(res => {
      this.getFunds();
    });
  }

}
