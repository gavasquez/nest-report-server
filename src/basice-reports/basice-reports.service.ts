import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BasiceReportsService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
    console.log(`Conneted to database`);
  }

  async hello(){
    return this.employees.findFirst();
  }

}
