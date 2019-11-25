import { Component, OnInit, Input } from "@angular/core";
import { Label, MultiDataSet } from "ng2-charts";
import { ChartType } from "chart.js";
@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut
  doughnutChartType: ChartType = "doughnut";
  @Input() leyenda: string = "";
  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: MultiDataSet = [[]];
  constructor() {}

  ngOnInit() {}
}
