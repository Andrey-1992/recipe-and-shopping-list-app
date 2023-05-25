import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  componentState: string;

  constructor(private route: ActivatedRoute, private router: Router,) {};

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        !this.editMode ? this.componentState = 'New Status' : this.componentState = 'Edit Status'
      }
    )
  }

  onNewRecipe() {

  }

}
