import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-patio-map',
  standalone: true,
  imports: [],
  templateUrl: './patio-map.component.html',
  styleUrl: './patio-map.component.scss'
})
export class PatioMapModule implements OnInit {

  map!: L.Map;
  rectangles: L.Rectangle[] = [];

  ngOnInit(): void {
    this.map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: -1
    });

    var bounds: [number, number][] = [[0, 0], [1000, 1000]];
    var image = L.imageOverlay('', bounds).addTo(this.map);
    this.map.fitBounds(bounds);

    // Add rectangles to the map
    this.addRectangles();
  }

  addRectangles(): void {
    this.generateCourtyards();
    // Add all rectangles to the map
    this.rectangles.forEach(rectangle => {
      rectangle.addTo(this.map);
    });
  }

  generateCourtyards(): void {
    const columnWidth = 80;
    const rowHeight = 50;
    const spaceBetweenColumns = 20; // Adjust as needed
    const columns = ['A', 'B', 'C', 'D'];

    // Define the HSL values for red and green
    const redHue = 0; // Red hue
    const greenHue = 120; // Green hue
    const saturation = 100; // Saturation
    const lightness = 50; // Lightness

    for (let column = 0; column < 4; column++) {
      for (let row = 0; row < 15; row++) {
        const x1 = column * (columnWidth + spaceBetweenColumns);
        const y1 = row * rowHeight;
        const x2 = x1 + columnWidth;
        const y2 = y1 + rowHeight;

        // Calculate the hue for the current rectangle based on its position
        const hue = (greenHue - redHue) * (row / 14) + redHue;

        // Create the color string in HSL format
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        const label = columns[column] + (row + 1); // Combine column letter and row number
        const placa = `<b>Placa:</b> ` + columns[column] + (row + 1) + `<br>`;
        const situacao = `<b>Situação: </b> Em Manutenção <br>`;
        const dias = `<b>Dias na situação: </b> 10 dias`;
        const info = placa + '\n' + situacao + dias;

        const rectangle = L.rectangle([[y1, x1], [y2, x2]], { color: color })
          .bindTooltip(label)
          .bindPopup(info);

        this.rectangles.push(rectangle);
      }
    }
  }

}
