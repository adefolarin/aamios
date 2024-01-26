import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NolivetvPage } from './nolivetv.page';

describe('NolivetvPage', () => {
  let component: NolivetvPage;
  let fixture: ComponentFixture<NolivetvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NolivetvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NolivetvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
