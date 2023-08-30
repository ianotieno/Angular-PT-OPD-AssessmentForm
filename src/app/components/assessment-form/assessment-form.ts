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
    {type: 'text', name: 'comorbidities', placeHolder: 'Comorbidities', label: 'Comorbidities: '},
    {type: 'textarea', name: 'diagnosis', placeHolder: 'Diagnosis', label: 'Diagnosis'},
    {type: 'textarea', name: 'history', placeHolder: 'History (Medical & Surgical):', label: 'History (Medical & Surgical):'},
    {type: 'textarea', name: 'investigations', placeHolder: 'Investigations', label: 'Investigations:'},
    {type: 'textarea', name: 'labs', placeHolder: 'Labs & Attached Results:', label: 'Labs & Attached Results:'},
    {type: 'textarea', name: 'management', placeHolder: 'Management: ', label: 'Management:'},
    {type: 'groupedInputs', name: 'physiotherapy',  inputs: [
      {type: 'text', name: 'rom', placeHolder: 'Rom', label: 'Rom:'},
      {type: 'text', name: 'gait', placeHolder: 'Gait', label: 'Gait'},
      {type: 'text', name: 'mobility', placeHolder: 'Mobility (Transfers)', label: 'Mobility (Transfers):'},
      {type: 'text', name: 'motor', placeHolder: 'Motor/ Strength', label: 'Motor/ Strength:'},]
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
    admission: ['', Validators.required],
    comorbidities: ['', Validators.required],
    diagnosis: ['', Validators.required],
    history: ['', Validators.required],
    investigations: ['', Validators.required],
    labs: ['', Validators.required],
    management: ['', Validators.required],
    rom: ['', Validators.required],
    gait: ['', Validators.required],
    mobility: ['', Validators.required],
    motor: ['', Validators.required],
    occupational: ['', Validators.required],
    speech: ['', Validators.required],
    nursing: ['', Validators.required],
    clinical: ['', Validators.required],
    medical: ['', Validators.required],
    instruction: ['', Validators.required],
    doctor: ['', Validators.required],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
