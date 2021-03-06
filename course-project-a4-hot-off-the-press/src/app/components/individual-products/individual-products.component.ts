import { Component, Input, OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service'
import { Album } from '../../../app/models/album';
import { map } from 'rxjs/operators';
import { AgmCoreModule } from '@agm/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.scss']
})
export class IndividualProductsComponent implements OnInit {
  album: Album;

  addtocart(album) {
    this.ips.addtocart(album);
    window.alert('This product has been added to your cart!');
  }

  constructor(private ips:IndividualProductsService) { }

  ngOnInit(): void {
    this.album = this.ips.get();
  }

  initMap(){}
}
