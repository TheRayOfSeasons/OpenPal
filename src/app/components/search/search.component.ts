import { Component, OnInit, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  user: any;
  id: any;
  disciplers: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.userService.getUserDetails(this.id).subscribe(user => this.user = user);
    this.userService.getDisciplers().subscribe(disciplers => this.disciplers = disciplers);
  }

  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  }

}
