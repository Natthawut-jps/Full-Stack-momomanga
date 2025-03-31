import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from './entities/series.entity';
import { Repository } from 'typeorm';

@Controller('series')
export class SeriesController {
  constructor(
    @InjectRepository(Series)
    private readonly seriesService: Repository<Series>) {}

  @Post()
  async create(@Body() createSeriesDto: CreateSeriesDto): Promise<Series> {
    return await this.seriesService.save(createSeriesDto);
  }

  @Get()
  findAll() {
    return this.seriesService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOneBy({ id: parseInt(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
    return this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesService.delete(id);
  }
}
