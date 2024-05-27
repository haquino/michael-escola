import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [ SidebarComponent, NavbarComponent, FooterComponent, RouterModule ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  ngOnInit() { }
}
