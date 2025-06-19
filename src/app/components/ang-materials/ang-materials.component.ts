import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-ang-materials',
  standalone: true,
  imports: [MatButtonModule, DialogComponent],
  templateUrl: './ang-materials.component.html',
  styleUrl: './ang-materials.component.css',
})
export class AngMaterialsComponent {
  name: string = '';
  email: string = '';
  direction: string = '';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        name: this.name,
        email: this.email,
        direction: this.direction,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.name = result.name;
        this.email = result.email;
        this.direction = result.direction;
      }
    });
  }
}
