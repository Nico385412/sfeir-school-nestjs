import { Equals, IsString } from 'class-validator';

export class TodoDto {
  @Equals(1 | 2)
  userId: 1 | 2;

  @IsString()
  title: string;

  @Equals(false)
  completed: false;
}
