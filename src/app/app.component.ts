import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UserdataService} from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Angularapp';
  userD:any;

  title='Pagination';                       //Pagination
  POSTS:any;
  page :number=1;
  count :number=0;
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
  
  constructor(private usersService: UserdataService){}          ///Pagination

  // constructor(private userData:UserdataService){
  //   //console.warn(userData.users());
  //   this.userD=userData.users().subscribe((data)=>{       //subscribe function
  //     // console.warn("Data ",data);
  //     this.userD=data;
      
  //   });
    
  // }

  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.minLength(6)])
  })

  loginUser(){
    console.warn(this.loginForm.value);
    
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit():void{                                                    //Pagination
    this.postList();
  }

  postList():void{                                                     //Pagination
    this.usersService.getAllPost().subscribe((response)=>{
      this.POSTS=response;
      console.log(this.POSTS);
      
    })
  }

  onTableDataChange(event:any){                                       //Pagination
    this.page=event;
    this.postList();
  }

  onTableSizeChange(event:any):void{                                  //Pagination
    this.tableSize=event.target.value;
    this.page=1;
    this.postList();
  }

}
