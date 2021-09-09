/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param, Res, Body } from '@nestjs/common';
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService){}
    
    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() model: User){
        return await this.service.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model:User){
        return await this.service.update(id,model);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.service.delete(id);
    }

}
