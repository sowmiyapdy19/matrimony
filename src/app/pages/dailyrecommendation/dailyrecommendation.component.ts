import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-dailyrecommendation',
  templateUrl: './dailyrecommendation.component.html',
  styleUrls: ['./dailyrecommendation.component.css']
})
export class DailyrecommendationComponent implements OnInit {

  clientList:any =[];

  constructor(
    private clientService:ClientService,
    private toaster:ToastrService
  ) { }

  ngOnInit(): void {
    this.clientService.getClientDetail().subscribe((res)=>{
      this.clientList = res;
    })
  }

  onReject(ind:any){
    this.clientList = this.clientList.filter((t:any) => t.id !== ind)
    this.toaster.warning('Not Interested', 'You are Not-Interested')
  }

  onApprove(ind:any){
    this.clientList = this.clientList.filter((t:any) => t.id !== ind)
    this.toaster.success('Interested', 'You are interested')
  }

  onShortlist(ind:any){
    this.clientList = this.clientList.filter((t:any) => t.id !== ind)
    this.toaster.success('Shortlisted', 'Added to Shortlist')
  }

  slideChange(event:any) {
    if(event[0].swipeDirection === 'next'){
      this.toaster.warning('Not Interested', 'You are Not-Interested')
    }
    if(event[0].swipeDirection === 'prev'){
      this.toaster.success('Interested', 'You are interested')
    }
  }

}
