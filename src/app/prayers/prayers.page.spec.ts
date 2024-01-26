import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrayersPage } from './prayers.page';

describe('PrayersPage', () => {
  let component: PrayersPage;
  let fixture: ComponentFixture<PrayersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
