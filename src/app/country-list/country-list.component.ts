import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/countryservice';
import { CountryDTO } from '../Model/CountryDTO';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries!:CountryDTO[]
  constructor(private countryService:CountryService){}
  
  ngOnInit(): void {
    this.loadAll()
  }

  delete(id:number){
    debugger
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.countryService.delete(id).subscribe({
          next:()=>{
            debugger
            this.loadAll()
    
            
          }
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
  }

  loadAll(){
    this.countryService.LoadAll().subscribe({
      next:data=>{
        debugger
        this.countries=data
      }
    })
  }
}
