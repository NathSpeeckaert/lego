import { Component, OnInit } from '@angular/core';
import { ISet } from '../models/ISet';
import { SetService } from '../services/set.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
