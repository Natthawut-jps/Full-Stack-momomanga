import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';

@Controller('genres')
export class GenresController {
  constructor(
    @InjectRepository(Genre)
    private readonly genresService: Repository<Genre>) {}

  @Post()
 async create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return await this.genresService.save(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genresService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genresService.findOneBy({ id: parseInt(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(id, updateGenreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.genresService.delete({ id: parseInt(id)});
  }
}
