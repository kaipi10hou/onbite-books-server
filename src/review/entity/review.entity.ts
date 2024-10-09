import { ApiProperty } from '@nestjs/swagger';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';



@ObjectType()
export class ReviewEntity {
  @ApiProperty({
    description: '아이디',
  })
  @Field(() => Int)
  id: number;

  @ApiProperty({
    description: '리뷰 내용',
  })
  @Field(() => String)
  content: string;

  @ApiProperty({
    description: '작성자',
  })
  @Field(() => String)
  author: string;

  @ApiProperty({
    description: '작성 시기',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({
    description: '도서 id',
  })
  @Field(() => Int)
  bookId: number;
}
