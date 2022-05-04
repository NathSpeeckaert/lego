import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-count-chart',
  templateUrl: './count-chart.component.html',
  styleUrls: ['./count-chart.component.scss']
})
export class CountChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [  'Sold' , 'Sealed', 'Built', 'Pending' ],
    datasets: [ {
      data: [ this., 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // changeLabels(): void {
  //   const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
  //     'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
  //     'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
  //     'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
  //     'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
  //   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  //   this.pieChartData.labels = new Array(3).map(_ => randomWord());

  //   this.chart?.update();
  // }

  // addSlice(): void {
  //   if (this.pieChartData.labels) {
  //     this.pieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
  //   }

  //   this.pieChartData.datasets[0].data.push(400);

  //   this.chart?.update();
  // }

  // removeSlice(): void {
  //   if (this.pieChartData.labels) {
  //     this.pieChartData.labels.pop();
  //   }

  //   this.pieChartData.datasets[0].data.pop();

  //   this.chart?.update();
  // }

  // changeLegendPosition(): void {
  //   if (this.pieChartOptions?.plugins?.legend) {
  //     this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
  //   }

  //   this.chart?.render();
  // }

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }
}