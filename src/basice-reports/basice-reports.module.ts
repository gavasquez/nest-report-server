import { Module } from '@nestjs/common';
import { BasiceReportsService } from './basice-reports.service';
import { BasiceReportsController } from './basice-reports.controller';

@Module({
  controllers: [BasiceReportsController],
  providers: [BasiceReportsService],
})
export class BasiceReportsModule {}
