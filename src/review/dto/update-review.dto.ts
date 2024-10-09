import { IsNonEmptyString } from 'src/validate-decorators';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewDto {
  @IsNonEmptyString()
  @Field(() => String, { nullable: true }) // GraphQL에서 nullable 설정
  content?: string; // 선택적 필드로 설정

  @IsNonEmptyString()
  @Field(() => String, { nullable: true }) // GraphQL에서 nullable 설정
  author?: string; // 선택적 필드로 설정
}
