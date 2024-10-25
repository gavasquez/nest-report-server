import { Controller, Get } from '@nestjs/common';
import { BasiceReportsService } from './basice-reports.service';

@Controller('basice-reports')
export class BasiceReportsController {
  constructor(private readonly basiceReportsService: BasiceReportsService) {}


  @Get()
  async hello(){
    return this.basiceReportsService.hello();
  }
}
