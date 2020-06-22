import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  list;

  constructor(private route: ActivatedRoute, private service: ViewService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((val) => {
      this.getList(val.type);
    });
  }

  getList(type){
    this.service.getList(type).subscribe((val:any)=>{
      console.log(val);
      if(val.status !== 'success'){
        alert("Error!");
      }else{
        this.list = val.payload;
      }
    })
  }

  delete(id){
    this.service.delete(id).subscribe((val:any)=>{
      if(val.status !== 'success'){
        alert("Error!");
      }else{
        location.reload();
      }
    });
  }

}
