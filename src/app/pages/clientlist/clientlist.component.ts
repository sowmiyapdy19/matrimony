import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
// import Swiper core and required modules
import SwiperCore, {  Scrollbar } from 'swiper';
// install Swiper modules
// SwiperCore.use([Scrollbar]);

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  clientList:any =[];

  constructor(
    private clientService:ClientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.clientService.getClientDetail().subscribe((res)=>{
      this.clientList = res;
    })
  }

  onReject(ind:any){
    this.clientList = this.clientList.filter((t:any) => t.id !== ind)
  }

  onApprove(ind:any){
    this.router.navigate(['/clientdetail/'+ind])
  }

}
