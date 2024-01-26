import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KcileregPage } from './kcilereg.page';

describe('KcileregPage', () => {
  let component: KcileregPage;
  let fixture: ComponentFixture<KcileregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcileregPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KcileregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
