import { Amenity } from './types';

const validateFullAmenities = (amenityList: Amenity[]) =>
  amenityList.some(hasOwnPropertyName);

const hasOwnPropertyName = (amenity: Amenity): boolean => 'name' in amenity;

export { validateFullAmenities };
