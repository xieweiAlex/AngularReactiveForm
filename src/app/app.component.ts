import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{title}}
  
   <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Data Driven Form</h1>
              <app-my-form></app-my-form>
          <hr>
        </div>
    </div>
   </div> 
  
  
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

}


