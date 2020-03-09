import { Location } from 'src/models/location.model';
import { SocialMedia } from 'src/models/socialMedia.model';


export class Mocker {
    static mockLocations(): Array<Location> {
        let location0 = <Location> <any> { 'id': 0, 'name': 'Internet'}
        let location1 = <Location> <any> { 'id': 1, 'name': 'Tv'}
        let location2 = <Location> <any> { 'id': 2, 'name': 'Outros'}
        
        return [location0, location1, location2];
    }

    static mockSocialMedias(): Array<SocialMedia> {
        let socialMedia0 = <SocialMedia> <any> { 'id': 0, 'name': 'Facebook'}
        let socialMedia1 = <SocialMedia> <any> { 'id': 1, 'name': 'Linkedin'}
        let socialMedia2 = <SocialMedia> <any> { 'id': 2, 'name': 'Instagram'}
        
        return [socialMedia0, socialMedia1, socialMedia2];
    }
}