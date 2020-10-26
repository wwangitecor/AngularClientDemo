import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { BaseService } from 'src/app/shared/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getItems(itemParameter?: any) {
    return this.http.get(this.apiUrlBase, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
      observe: 'response',
      params: itemParameter
    })
  }

}
