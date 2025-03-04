import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-dialog-contect-delete',
  styles: [],
  template: `
    <h2 mat-dialog-title>¿Está seguro?</h2>
    <mat-dialog-content>
      <p>
        Este proceso no es reversible, está a punto de eliminar a
        {{ data.superhero }}
      </p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No</button>
      <span class="spacer"></span>
      <button mat-button (click)="onConfirm()" color="primary">Ok</button>
    </mat-dialog-actions>
  `,
})
export class DialogContentDeleteComponent {
  readonly dialogRef = inject(MatDialogRef<DialogContentDeleteComponent>);
  readonly data = inject<Hero>(MAT_DIALOG_DATA);

  // constructor(
  //   public dialogRef: MatDialogRef<DialogContentDeleteComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Hero
  // ) {}

  onNoClick() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
