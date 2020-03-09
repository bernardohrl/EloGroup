import { Destination } from './destination.model';
import { Location } from './locationOld.model';

export interface Call {
    origin: Location;
    destinations: Destination;
}