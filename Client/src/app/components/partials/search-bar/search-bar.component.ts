import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

search='';
  constructor(activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.search)
      this.search=params.search;
    })
   }

  ngOnInit(): void {
  }

  searchMethod(term:string):void{
   if(term)
   this.router.navigateByUrl('/search-bar/'+term)
  }

}
