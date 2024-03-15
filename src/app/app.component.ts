import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet';
import { PatioMapModule } from './patio-map/patio-map.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatioMapModule, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fleet-mgmt-mottu';
}
