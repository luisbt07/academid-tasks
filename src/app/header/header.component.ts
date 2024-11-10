import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{
    todayDate: Date = new Date();
}
