import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngx-charts',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './ngx-charts.component.html',
  styleUrl: './ngx-charts.component.css',
})
export class NgxChartsComponent {
  //Lineas
  multi = [
    {
      name: 'JavaScript',
      series: [
        { name: '2015', value: 8000000 },
        { name: '2020', value: 10000000 },
        { name: '2025', value: 12000000 },
      ],
    },
    {
      name: 'Python',
      series: [
        { name: '2015', value: 7000000 },
        { name: '2020', value: 11000000 },
        { name: '2025', value: 23000000 },
      ],
    },
    {
      name: 'C#',
      series: [
        { name: '2015', value: 4000000 },
        { name: '2020', value: 4200000 },
        { name: '2025', value: 4400000 },
      ],
    },
    {
      name: 'Java',
      series: [
        { name: '2015', value: 9000000 },
        { name: '2020', value: 9500000 },
        { name: '2025', value: 10100000 },
      ],
    },
  ];

  //Barras verticales
  data = [
    { name: 'Python', value: 23000000 },
    { name: 'C++', value: 10200000 },
    { name: 'Java', value: 10100000 },
    { name: 'C', value: 8800000 },
    { name: 'C#', value: 4400000 },
    { name: 'JavaScript', value: 4200000 },
    { name: 'Go', value: 2600000 },
    { name: 'SQL', value: 2400000 },
    { name: 'Visual Basic', value: 2300000 },
    { name: 'Fortran', value: 2000000 },
  ];

  //Opciones para los 2 graficos
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  legendTitle: string = 'Lenguajes';

  //Opciones linea
  timeline: boolean = true;
  xAxisLabelL = 'Año';
  yAxisLabelL = 'Usuarios';

  //Opciones barras
  xAxisLabel = 'Lenguaje';
  yAxisLabel = 'Usuarios';
}
