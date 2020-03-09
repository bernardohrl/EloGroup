import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mocker } from 'src/helpers/Mocker';

import { Location } from 'src/models/location.model'
import { PersonalData } from 'src/models/personalData.model'
import { SocialMedia } from 'src/models/socialMedia.model'

@Component({
  selector: 'dadosPessoais',
  templateUrl: './dadosPessoais.component.html',
  styleUrls: ['./dadosPessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {
  public locations: Array<Location> = null;
  public socialMedias: Array<SocialMedia> = null;

  public dataForm = this.fb.group({
    name: null,
    phone: null,
    knownFrom: [0],
    socialMedia: [null, Validators.required],
  });


  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.locations = Mocker.mockLocations();
    this.socialMedias = Mocker.mockSocialMedias();
  }


  updated() {
    console.log("\n\n")
    console.log(this.dataForm.get('name').value)
    console.log(this.dataForm.get('phone').value)
    console.log(this.dataForm.get('knownFrom').value)
    console.log(this.dataForm.get('socialMedia').value)
  }

  socialMediaSelected(event) {
    var selectedMedia = event.path[1];
    var [comment, ...medias]: Array<any> = event.path[2].childNodes;
    
    var selectedStyle: string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle: string = "background-color: white; color: black; border-color: black; font-weight: 100";

    medias.forEach(plan => {
      plan == selectedMedia ?
              plan.setAttribute("style", selectedStyle) : 
              plan.setAttribute("style", defaultStyle);
    });

    this.updated();
  }
}
