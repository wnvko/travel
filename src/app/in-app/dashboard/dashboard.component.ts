import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { DestinationsType } from '../../models/travel-app-data/destinations-type';
import { ImageSet1Type } from '../../models/travel-app-data/image-set1-type';
import { ImageSet2Type } from '../../models/travel-app-data/image-set2-type';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];
  public travelAppDataDestinations: DestinationsType[] = [];
  public travelAppDataImageSet1: ImageSet1Type[] = [];
  public travelAppDataImageSet2: ImageSet2Type[] = [];

  constructor(
    private travelAppDataService: TravelAppDataService,
  ) {}


  ngOnInit() {
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataSelectedArticles = data
    );
    this.travelAppDataService.getDestinations().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataDestinations = data
    );
    this.travelAppDataService.getImageSet1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataImageSet1 = data
    );
    this.travelAppDataService.getImageSet2().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataImageSet2 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
