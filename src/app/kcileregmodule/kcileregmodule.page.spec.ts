import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KcileregmodulePage } from './kcileregmodule.page';

describe('KcileregmodulePage', () => {
  let component: KcileregmodulePage;
  let fixture: ComponentFixture<KcileregmodulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcileregmodulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KcileregmodulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
