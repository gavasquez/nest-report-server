import { Module } from '@nestjs/common';
import { BasiceReportsModule } from './basice-reports/basice-reports.module';

@Module({
  imports: [BasiceReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
