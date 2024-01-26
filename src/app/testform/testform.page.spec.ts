import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestformPage } from './testform.page';

describe('TestformPage', () => {
  let component: TestformPage;
  let fixture: ComponentFixture<TestformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
