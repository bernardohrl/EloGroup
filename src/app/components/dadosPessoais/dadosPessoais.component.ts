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
  public submited: boolean = false;

  public dataForm = this.fb.group({
    name: null,
    phone: null,
    hasMedias: null,
    knownFrom: [0],
    socialMediaArray: [[], Validators.required],
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
    console.log(this.dataForm.get('hasMedias').value)
    console.log(this.dataForm.get('socialMediaArray').value)
  }

  socialMediaSelected(event) {
    var button = event.path[1];
    var selected = event.srcElement.checked;

    var selectedStyle: string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle: string = "background-color: white; color: black; border-color: black; font-weight: 100";
    selected ? button.setAttribute("style", selectedStyle) : button.setAttribute("style", defaultStyle);

    this.toggle(event.srcElement.id)

    this.updated();
  }

  onSubmit() {
    console.log("aaaa")
    this.submited = true;
  }






  private toggle(media) {
    var array = this.dataForm.get('socialMediaArray').value;
    var index = array.indexOf(media);

    if (index === -1) array.push(media);
    else              array.splice(index, 1);
    
  }
}
