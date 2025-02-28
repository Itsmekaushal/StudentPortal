import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComponent } from './info.component';
import { By } from '@angular/platform-browser';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.value').textContent).toContain(component.user.firstName);
  });

  it('should update previewUrl when a valid image file is selected', () => {
    const file = new File(['dummy content'], 'profile.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [file] } };

    component.onFileSelected(event);
    
    expect(component.previewUrl).toBeTruthy();
  });

  it('should not update previewUrl when an invalid file is selected', () => {
    const file = new File(['dummy content'], 'document.pdf', { type: 'application/pdf' });
    const event = { target: { files: [file] } };

    component.onFileSelected(event);
    
    expect(component.previewUrl).toBeNull();
  });
});
