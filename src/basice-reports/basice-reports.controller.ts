import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasiceReportsService } from './basice-reports.service';
import { Response } from 'express';

@Controller('basice-reports')
export class BasiceReportsController {
  constructor(private readonly basiceReportsService: BasiceReportsService) {}


  @Get()
  async hello(@Res() response: Response){
    const pdfDoc = this.basiceReportsService.hello();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello-World';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employmen-letter')
  async employmenLetter(@Res() response: Response){
    const pdfDoc = this.basiceReportsService.employmenLetter();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello-World';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employmen-letter/:employeeId')
  async employmenLetterById(@Res() response: Response, @Param('employeeId') employeeId: string){
    const pdfDoc = await this.basiceReportsService.employmenLetterById(+employeeId);
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello-World';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

}
