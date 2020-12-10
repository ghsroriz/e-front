import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoCreate(): void {
    this.router.navigate(['/adm/create']);
  }

  gotoModify(): void {
    this.router.navigate(['/adm/modify']);
  }


}
