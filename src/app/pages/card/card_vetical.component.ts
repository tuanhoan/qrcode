import { Component, OnInit, Input } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'card-vertical',
  template: `
   <div class="card mb-3"  style="width: 30rem;">
      <img class="card-img-top" src="{{image}}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{tittle}}</h5>
        <p class="card-text">{{content}}</p>
        <p class="card-text"><small class="text-muted">{{time}}</small></p>
      </div>
 </div>
  `,
  styles: [``]
})
export class CardVerticalComponent implements OnInit {
  @Input() content: string ="hello";
  @Input() image: any;
  @Input() time: any;
  @Input() tittle: any;
  ngOnInit(): void {
    if (this.content.length > 70) {
      var trimmedString = this.content.substr(0, 70);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    }
  }
}