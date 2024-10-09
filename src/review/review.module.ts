import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { ReviewResolver } from './review.resolver';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ReviewResolver],
})
export class ReviewModule {}