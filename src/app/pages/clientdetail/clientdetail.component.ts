import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
// import Swiper core and required modules
import SwiperCore, {  Pagination } from 'swiper';
// install Swiper modules
// SwiperCore.use([Pagination]);

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {
  clientDetail:any;

  constructor(
    private clientService:ClientService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.clientService.getClientDetail().subscribe((res:any)=>{
        res.forEach((element:any) => {
          if(element.id === data['id']){
            this.clientDetail = element;
           }
        });
      })
    })
    
  }

}
