import { Component, OnInit } from '@angular/core';
import { GetProdutosService } from 'src/app/services/get-produtos.service';


@Component({
  selector: 'app-nav-produtos',
  templateUrl: './nav-produtos.component.html',
  styleUrls: ['./nav-produtos.component.css']
})
export class NavProdutosComponent implements OnInit {

  constructor(public getProdutosService: GetProdutosService) {
  }

  ngOninit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.getProdutosService.getAll()
      .then(products => console.log(products));
  }


}
