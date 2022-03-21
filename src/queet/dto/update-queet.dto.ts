import { PartialType } from '@nestjs/mapped-types';
import { PostQueetRequest } from './create-queet.dto';

export class UpdateQueetDto extends PartialType(PostQueetRequest) {
  id: number;
}
