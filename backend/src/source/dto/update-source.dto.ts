import { PartialType } from '@nestjs/mapped-types';
import { CreateSourceDto } from './create-source.dto';

export class UpdateSourceDto extends PartialType(CreateSourceDto) {
    id: number
    title: string
    description: string
    createAt: Date
    updateAt: Date
}
