import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngMaterialsComponent } from './components/ang-materials/ang-materials.component';
import { NgxChartsComponent } from './components/ngx-charts/ngx-charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngMaterialsComponent, NgxChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio-librerias';
}
