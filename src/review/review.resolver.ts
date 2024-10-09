// src/review/review.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntity } from './entity/review.entity';

@Resolver(() => ReviewEntity)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [ReviewEntity])
  async findAllReviews(): Promise<ReviewEntity[]> {
    return this.reviewService.findAllReviews();
  }

  @Query(() => [ReviewEntity])
  async findBookReviews(@Args('bookId') bookId: number): Promise<ReviewEntity[]> {
    return this.reviewService.findBookReviews(bookId);
  }

  @Mutation(() => ReviewEntity)
  async createReview(@Args('createReviewDto') createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    return this.reviewService.createReview(createReviewDto);
  }

  @Mutation(() => ReviewEntity)
  async updateReview(
    @Args('reviewId') reviewId: number,
    @Args('updateReviewDto') updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewEntity> {
    return this.reviewService.updateReview(reviewId, updateReviewDto);
  }

  @Mutation(() => Boolean)
  async removeReview(@Args('reviewId') reviewId: number): Promise<boolean> {
    await this.reviewService.removeReview(reviewId);
    return true; // Indicate success
  }
}
