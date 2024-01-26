import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KcilePage } from './kcile.page';

describe('KcilePage', () => {
  let component: KcilePage;
  let fixture: ComponentFixture<KcilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KcilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
