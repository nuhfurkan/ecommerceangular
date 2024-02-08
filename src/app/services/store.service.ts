import { Injectable } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { Observable, map, pipe, switchMap } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  constructor(private fireStore: AngularFirestore) {
  }

  
  fetchItems(limitNo: number): Observable<Product[]> {
    return this.fireStore.collection<Product>("products", ref => ref.orderBy("id").limit(limitNo)).snapshotChanges()
    .pipe(
      map(actions => actions.map(a => ({...a.payload.doc.data() as Product })))
    );
  }
}
