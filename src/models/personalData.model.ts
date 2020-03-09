import { Location } from './location.model';
import { SocialMedia } from './socialMedia.model';

export interface PersonalData {
    name: string;
    phone: string;
    knownFrom: Location;
    socialMedias: Array<SocialMedia>;
}