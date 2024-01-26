import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivetvPage } from './livetv.page';

describe('LivetvPage', () => {
  let component: LivetvPage;
  let fixture: ComponentFixture<LivetvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivetvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
