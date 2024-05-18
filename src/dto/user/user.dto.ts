
import {  IsNotEmpty } from 'class-validator';

export class UserDto {    
  @IsNotEmpty()
 declare username: string;
   // Your middleware logic here
}
