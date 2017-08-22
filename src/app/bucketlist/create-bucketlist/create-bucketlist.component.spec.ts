import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBucketlistComponent } from './create-bucketlist.component';

describe('CreateBucketlistComponent', () => {
  let component: CreateBucketlistComponent;
  let fixture: ComponentFixture<CreateBucketlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBucketlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBucketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
