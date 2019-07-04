import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // public hero:String = '';
  // public hero: Hero = {};
  public heroes = HEROES;
  public selectedHero: Hero;

  constructor() { 
    // this.hero.name = 'Santiaguito donal';
    // this.hero.id = 1;
    this.selectedHero = new Hero();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  ngOnInit() {
  }

}
