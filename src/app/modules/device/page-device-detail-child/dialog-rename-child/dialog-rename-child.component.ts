import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/cores/api.service';

@Component({
    selector: 'app-dialog-rename-child',
    templateUrl: './dialog-rename-child.component.html',
    styleUrls: ['./dialog-rename-child.component.css']
})
export class DialogRenameChildComponent implements OnInit {

    childName;
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public dataSwitch: any,
        private rest: ApiService,
        // public dataUser: UserService,
        public dialogRef: MatDialogRef<DialogRenameChildComponent>,
        private _snackBar: MatSnackBar,
    ) { }

    ngOnInit(): void {
        console.log(this.dataSwitch)
        this.childName = this.dataSwitch['NAME'];
    }

    renameSwitch() {
        this.rest.renameSwitch(this.dataSwitch['key'],this.childName);
        this.dialogRef.close(true);
    }

}
