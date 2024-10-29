import { Module } from '@nestjs/common';
import { BasiceReportsModule } from './basice-reports/basice-reports.module';
import { PrinterModule } from './printer/printer.module';

@Module({
  imports: [BasiceReportsModule, PrinterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
