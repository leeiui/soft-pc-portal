import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  // private products:Product[] = [
  //   new Product(102, "1电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(103, "2电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(104, "3电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(105, "4电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 4),
  //   new Product(106, "5电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 2),
  //   new Product(107, "6电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 1),
  //   new Product(108, "7电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 4),
  //   new Product(109, "8电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(110, "9电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 3),
  //   new Product(111, "10电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(112, "11电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(113, "12电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5),
  //   new Product(114, "13电脑", 8888.88, "http://localhost:8882/mgt/upload/pc_pic/1e861fa6ea9a4fbd87273ce417326250.jpg", 5)

  // ];

  // private comments:Comment[] = [

  //   new Comment(1,102,"2017-02-01 22:22:22",1,"东西不错"),
  //   new Comment(2,103,"2017-02-01 22:22:22",2,"东西不错"),
  //   new Comment(3,103,"2017-02-01 22:22:22",3,"东西不错"),
  //   new Comment(4,104,"2017-02-01 22:22:22",4,"东西不错"),
  //   new Comment(5,105,"2017-02-01 22:22:22",5,"东西不错"),
  //   new Comment(6,106,"2017-02-01 22:22:22",4,"东西不错"),
  //   new Comment(7,107,"2017-02-01 22:22:22",3,"东西不错")
  // ]
  constructor(private http:Http) { }

  //得到所有商品
  getProducts():Observable<ProductPager>{
    return this.http.get("/core/computer/all").map(res=>res.json());
  }

  //函数：返回类型
  // getProduct(id:number):Product{
  //   return this.products.find((product:Product)=>product.id==id);
  // }

  // getCommentForProductId(id:number){
  //   return this.comments.filter((comment:Comment)=>comment.productId==id);
  // }
}

export class Product{
  constructor(
    public id:number,
    public trademark:string,
    public price:number,
    public pic:string,
    public rating:number
  ){}
}

export class Comment{
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public rating: number,
    public content: string
  ){}
}
export class ProductPager{
  constructor(
    public pageNum:number,
    public totalRows:number,
    public data:Product[]
  ){}
}