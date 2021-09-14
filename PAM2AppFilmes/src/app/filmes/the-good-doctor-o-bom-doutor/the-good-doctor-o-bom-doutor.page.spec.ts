import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheGoodDoctorOBomDoutorPage } from './the-good-doctor-o-bom-doutor.page';

describe('TheGoodDoctorOBomDoutorPage', () => {
  let component: TheGoodDoctorOBomDoutorPage;
  let fixture: ComponentFixture<TheGoodDoctorOBomDoutorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGoodDoctorOBomDoutorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheGoodDoctorOBomDoutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
