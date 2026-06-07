import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res: any) => {
      console.log(res);
      this.Books = res;
    });
  }

  // This is the function the template is missing!
  onDelete(id: any): any {
    if (confirm("Are you sure you want to delete this book?")) {
      this.crudService.DeleteBook(id).subscribe((res: any) => {
        console.log(res);
        location.reload(); 
      });
    }
  }
}