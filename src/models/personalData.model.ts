import { Location } from './location.model';
import { SocialMedia } from './socialMedia.model';

export class PersonalData {
    name: string;
    phone: string;
    knownFrom: Location;
    socialMedias?: Array<SocialMedia>;
}