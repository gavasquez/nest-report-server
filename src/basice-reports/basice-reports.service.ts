import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterByIdReport, getEmploymentLetterReport, getHelloWordlRepor } from 'src/reports';

@Injectable()
export class BasiceReportsService extends PrismaClient implements OnModuleInit {


  constructor(private readonly printerService: PrinterService){ super();}

  async onModuleInit() {
    await this.$connect();
    console.log(`Conneted to database`);
  }

  hello(){

    const docDefinition= getHelloWordlRepor({
      name: 'Andres Vasquez'
    });

    return this.printerService.createPdf(docDefinition);
  }

  employmenLetter(){
    const docDefinition= getEmploymentLetterReport();

    return this.printerService.createPdf(docDefinition);
  }

  async employmenLetterById(employeeId: number){

    const employee =await this.employees.findUnique({ where: { id: employeeId } });

    if(!employee){
      throw new NotFoundException(`No se encontro empleado con id ${employeeId}`);
    }

    const docDefinition= getEmploymentLetterByIdReport({
      employerName: 'Andres Vasquez',
      employerPosition: 'Gerente de RRHH',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchudule: employee.work_schedule,
      employerCompany: 'Tucan Code Corp.'
    });

    return this.printerService.createPdf(docDefinition);
  }

}
