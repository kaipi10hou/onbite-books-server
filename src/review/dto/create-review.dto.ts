import { Transform } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';
import { IsNonEmptyString } from 'src/validate-decorators';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReviewDto {
  @IsNonEmptyString()
  @Field(() => String)
  author: string;

  @IsNonEmptyString()
  @Field(() => String)
  content: string;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  @Field(() => Number)
  bookId: number;
}
