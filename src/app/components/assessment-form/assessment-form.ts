import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateRangeContent } from 'src/app/interfaces/date-range-content';
import { GroupedInputsContent } from 'src/app/interfaces/grouped-inputs-content';
import { RadiosContent } from 'src/app/interfaces/radios-content';
import { TextAreaContent } from 'src/app/interfaces/text-area-content';
import { TextContent } from 'src/app/interfaces/text-content';


@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.html',
  styleUrls: ['./assessment-form.css'],
})
export class Assessmentform{
  constructor(private formBuilder: FormBuilder) {}

  formContents: Array<TextContent | TextAreaContent | GroupedInputsContent | DateRangeContent | RadiosContent> = [
    
    {type: 'text', name: 'ReferringDoctor', placeHolder: 'Referring Doctor ', label: 'Referring Doctor '},
    {type: 'text', name: 'Diagnosis', placeHolder: 'Diagnosis', label: 'Diagnosis'},
    {type: 'textarea', name: 'ChiefComplains', placeHolder: 'Chief Complains/Subjective History:', label: 'Chief Complains/Subjective History:'},
    {type: 'textarea', name: 'PastMedical', placeHolder: 'Past Medical History', label: 'Past Medical History'},
    {type: 'textarea', name: 'SurgicalHistory', placeHolder: 'Surgical History', label: 'Surgical History'},
    
    {type: 'groupedInputs', name: 'Objective Examination(Range Of Motion )', label: 'Objective Examination(Range Of Motion )',  inputs: [
      {type: 'text', name: 'Rue', placeHolder: 'Rue', label: 'Rue'},
      {type: 'text', name: 'Lue', placeHolder: 'Lue', label: 'Lue'},
      {type: 'text', name: 'Rle', placeHolder: 'Rle', label: 'Rle'},
      {type: 'text', name: 'Lle', placeHolder: 'Lle', label: 'Lle'},]
    },
    {type: 'groupedInputs', name: 'Muscle Strength', label:'Muscle Strength', inputs: [
      {type: 'text', name: 'RightUpperextremity', placeHolder: 'Right Upper extremity', label: 'Right Upper extremity'},
      {type: 'text', name: 'Left', placeHolder: 'Left', label: 'Left'},
      {type: 'text', name: 'RightLower', placeHolder: 'Right Lower', label: 'Right Lower'},
      {type: 'text', name: 'Left', placeHolder: 'Left', label: 'Left'},
      {type: 'text', name: 'Balance', placeHolder: 'Balance', label: 'Balance'},]
    },
    {type: 'textarea', name: 'occupational', placeHolder: 'Occupational Therapy- Functionality', label: 'Occupational Therapy- Functionality:'},
    {type: 'textarea', name: 'speech', placeHolder: 'Speech Therapy-Feeding & Swallowing', label: 'Speech Therapy-Feeding & Swallowing:'},
    {type: 'textarea', name: 'nursing', placeHolder: 'Nursing', label: 'Nursing:'},
    {type: 'textarea', name: 'clinical', placeHolder: 'Clinical Condition On Discharge', label: 'Clinical Condition On Discharge:'},
    {type: 'textarea', name: 'medical', placeHolder: 'Medication On Discharge', label: 'Medication On Discharge:'},
    {type: 'textarea', name: 'instruction', placeHolder: 'Instruction On Discharge', label: 'Instruction On Discharge:'},
    {type: 'text', name: 'doctor', placeHolder: 'Doctor’s Name', label: 'Doctor’s Name:'}
  ]

  profileForm = this.formBuilder.group({
    ReferringDoctor: ['', Validators.required],
    Diagnosis: ['', Validators.required],
    ChiefComplains: ['', Validators.required],
    PastMedical: ['', Validators.required],
    SurgicalHistory: ['', Validators.required],
    Rue: ['', Validators.required],
    Lue: ['', Validators.required],
    Rle: ['', Validators.required],
    Lle: ['', Validators.required],
    RightUpperextremity: ['', Validators.required],
    Left: ['', Validators.required],
    RightLower: ['', Validators.required],
    Balance: ['', Validators.required],
    medical: ['', Validators.required],
    instruction: ['', Validators.required],
    doctor: ['', Validators.required],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
