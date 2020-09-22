import { Component, OnInit, Input } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'card-horizotal',
  template: `
 <div class="row"  style="width: 35rem;">
    <div class="col-6 col-md-4">
       <img class="card-img-top" src="{{image}}" alt="Card image cap">
    </div>
    <div class="col-12 col-sm-6 col-md-8">
        <h5 class="card-title">{{tittle}}</h5>
        <p class="card-text"><small class="text-muted">{{time}}</small></p>
    </div>
  </div>
  `,
  styles: [``]
})
export class CardHorizotalComponent implements OnInit {
  @Input() tittle:any;
  @Input() image:any;
  @Input() time:any;
  ngOnInit(): void {
    
  }
 
}