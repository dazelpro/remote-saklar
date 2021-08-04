import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog-rename-child',
    templateUrl: './dialog-rename-child.component.html',
    styleUrls: ['./dialog-rename-child.component.css']
})
export class DialogRenameChildComponent implements OnInit {

    childName;
    
    constructor() { }

    ngOnInit(): void {
    }

    async renameDevice() {

    }

}
