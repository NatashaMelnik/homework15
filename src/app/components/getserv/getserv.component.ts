import { Component, OnInit } from '@angular/core';
import { ImmediatelyService } from '../../services/immediately.service';

@Component({
  selector: 'app-getserv',
  templateUrl: './getserv.component.html',
  styleUrls: ['./getserv.component.scss']
})
export class GetservComponent implements OnInit {
  public planets;

  constructor(private planetsService: ImmediatelyService) { }

  ngOnInit(): void {
    this.planets = this.planetsService.GetPlanets();
    console.log(this.planets);
  }

}
