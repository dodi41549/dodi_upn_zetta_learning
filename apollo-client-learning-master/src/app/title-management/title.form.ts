import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Title {
  _id: string
  short_name: string
}
@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private apollo: Apollo) { }

   getTitles(status: boolean): Observable<any> {
     return this.apollo.mutate({
      mutation: gql`
      mutation ($status: Boolean){
        CreatePromo(promo_input:{
          ref:"ref001"
          title:"our promo 001"
          sub_title:"our promo sub 001"
          description:"description only 001"
        }){
          title
          sub_title
          description
        }
      }
      }
      `,
      variables: {
        status
      }
    })
   }

   

   




}
