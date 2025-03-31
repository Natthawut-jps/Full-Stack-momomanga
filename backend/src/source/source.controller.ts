import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable } from '@nestjs/common';
import { Source } from './entities/source.entity';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('source')
export class SourceController {
  constructor(
    @InjectRepository(Source)
    private readonly sourceService: Repository<Source>) {}

  @Post()
  async create(@Body() createSourceDto: CreateSourceDto): Promise<Source> {
    return await this.sourceService.save(createSourceDto);
  }

  @Get()
  async findAll(): Promise<Source[]> {
    return await this.sourceService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sourceService.findOneBy({ id: parseInt(id) });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSourceDto: UpdateSourceDto): Promise<UpdateResult> {
    return (await this.sourceService.update(id, updateSourceDto))
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sourceService.delete(parseInt(id));
  }
}
