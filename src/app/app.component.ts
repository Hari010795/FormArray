import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  title = 'project';
  registerForm!: FormGroup;
  submitted = false;
  fullname :any
  items!:FormArray
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){

    
      this.registerForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl ('', Validators.required),
         
        entries:new FormArray([])
      
      });
  
}


addnewrow(){
  this.submitted = true;

  console.log(this.registerForm.value)
 this.items = this.registerForm.get('entries') as FormArray;

 if (this.items.invalid) {      // To Validate FormArray
  return;
}
 this.items.push(this.genrow())
}

genrow():FormGroup{
  return new FormGroup({
    Country: new FormControl('',Validators.required),
    LEBook : new FormControl('',Validators.required),
  })
}

get entries(){
  return this.registerForm.get('entries') as FormArray   // To get the value in loop we use get 
}

// getValidity(i:any) {
//   return (<FormArray>this['formGroup'].get('features')).controls[i].invalid;
// }

// onSubmit() {
//   this.submitted = true;
//   console.log(this.registerForm.value)
  
// }


}