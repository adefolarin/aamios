import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Livetv2Page } from './livetv2.page';

describe('Livetv2Page', () => {
  let component: Livetv2Page;
  let fixture: ComponentFixture<Livetv2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livetv2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Livetv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
