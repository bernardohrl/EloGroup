import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mocker } from 'src/helpers/Mocker';

import { Location } from 'src/models/location.model'
import { PersonalData } from 'src/models/personalData.model'
import { SocialMedia } from 'src/models/socialMedia.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'dadosPessoais',
  templateUrl: './dadosPessoais.component.html',
  styleUrls: ['./dadosPessoais.component.scss']
})

export class DadosPessoaisComponent implements OnInit {
  public locations: Array<Location> = null;
  public socialMedias: Array<SocialMedia> = null;
  public submitted: boolean = false;
  public posted: boolean = false;

  public dataForm = this.fb.group({
    name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
    phone: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
    hasMedias: [null, Validators.required],
    knownFrom: [[0], Validators.required],
    socialMediaArray: [[]],
  });


  constructor(private fb: FormBuilder, private http: HttpClient) { }
  

  ngOnInit() {
    this.locations = Mocker.mockLocations();
    this.socialMedias = Mocker.mockSocialMedias();
  }


  maskPhone(event) { 
    var phone = event.target.value;
    phone = phone.replace(/\D/g,"");
    phone = phone.replace(/^(\d{2})(\d)/g,"($1) $2");
    phone = phone.replace(/(\d)(\d{4})$/,"$1-$2");
    event.target.value = phone;
  }


  socialMediaSelected(event) {
    var button = event.path[1];
    var selected = event.srcElement.checked;

    var selectedStyle: string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle: string = "background-color: white; color: black; border-color: black; font-weight: 100";
    selected ? button.setAttribute("style", selectedStyle) : button.setAttribute("style", defaultStyle);

    this.toggle(event.srcElement.id)   // Adiciona ou retira o objeto do array
  }


  private toggle(mediaId) {
    var mediaObj: SocialMedia = this.socialMedias[mediaId];
    var array: Array<SocialMedia> = this.dataForm.get('socialMediaArray').value;
    var index: number = array.indexOf(mediaObj);

    if (index === -1) array.push(mediaObj);
    else              array.splice(index, 1);
    
  }


  onSubmit() {
    this.submitted = true;
    var mediaSelected: boolean = true;

    // Se não possuir mídias selecionadas, invalida o forms.
    this.dataForm.get('hasMedias').value === 'true' && this.dataForm.get('socialMediaArray').value.length == 0 ?
      mediaSelected = false :
      mediaSelected = true;
    

    if (mediaSelected && this.dataForm.valid) {

      var data: PersonalData = {
        "name":  this.dataForm.get('name').value,
        "phone":  this.dataForm.get('phone').value,
        "knownFrom": this.locations[this.dataForm.get('knownFrom').value],
        "socialMedias": this.dataForm.get('socialMediaArray').value
      };


      // POST
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      this.http.post<PersonalData>('http://localhost:8080', data, httpOptions).subscribe({
        next: data => alert('Postado!'),
        error: error => alert('Postado, porém o não houve resposta.')
      })
      
    }
  }

}
