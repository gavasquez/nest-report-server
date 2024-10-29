import { Module } from '@nestjs/common';
import { BasiceReportsService } from './basice-reports.service';
import { BasiceReportsController } from './basice-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  controllers: [BasiceReportsController],
  providers: [BasiceReportsService],
  imports: [ PrinterModule]
})
export class BasiceReportsModule {}
